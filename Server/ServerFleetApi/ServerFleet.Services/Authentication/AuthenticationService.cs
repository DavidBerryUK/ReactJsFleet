using ServerFleet.Models.Entities.User;
using ServerFleet.Services.Authentication.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using ServerFleet.Models.Entities.Authentication;
using ServerFleet.Models.Rest.Authentication;
using ServerFleet.Services.User.Interfaces;

namespace ServerFleet.Services.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        public static List<TokenEntity> Tokens = new List<TokenEntity>();
        public readonly IUserService UserService;

        public AuthenticationService(IUserService userService)
        {
            UserService = userService;
        }

        public AuthorisationInfoModel Authenticate(string username, string password)
        {
            var user = UserService.Get(username, password);

            if (user != null)
            {
                var token = CreateTokenForUser(user);
                var response = new AuthorisationInfoModel
                {
                    User = token.User,
                    Token = token.Token,
                    Permissions = new List<string>(),
                };
                return response;
            }
            return null;
        }

        public AuthorisationInfoModel Authenticate(Guid token)
        {
            var tokenModel = GetTokenForValue(token);
            if (tokenModel == null)
            {
                return null;
            }

            var user = UserService.Get(tokenModel.User.Id);

            if (user == null)
            {
                return null;
            }

            var response = new AuthorisationInfoModel
            {
                User = user,
                Token = tokenModel.Token,
                Permissions = new List<string>(),
            };
            return response;

        }

        public TokenEntity CreateTokenForUser(UserModel user)
        {
            var token = new TokenEntity
            {
                Token = Guid.NewGuid(),
                User = user
            };

            RemoveToken(user.Id);
            Tokens.Add(token);

            return token;
        }


        public TokenEntity GetTokenForValue(Guid token)
        {
            return Tokens.FirstOrDefault(o => o.Token == token);
        }

        public TokenEntity GetTokenForUser(int userId)
        {
            return Tokens.FirstOrDefault(o => o.User.Id == userId);
        }

        public void RemoveToken(int userId)
        {
            Tokens = Tokens.Where(o => o.User.Id != userId).ToList();
        }

        public void RemoveToken(Guid token)
        {
            Tokens = Tokens.Where(o => o.Token != token).ToList();
        }

    }
}
