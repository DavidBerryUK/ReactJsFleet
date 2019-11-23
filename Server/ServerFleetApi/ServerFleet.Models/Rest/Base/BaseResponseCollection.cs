using System.Collections.Generic;

namespace ServerFleet.Models.Rest.Base
{
    public class BaseResponseCollection<T>    {        private string _errorMessage;        public bool Success { get; set; }        public string ErrorMessages        {            get => _errorMessage;            set            {                Success = false;                _errorMessage = value;            }        }        public List<T> Items { get; set; }        public BaseResponseCollection()        {            Success = true;            Items = new List<T>();        }    }}