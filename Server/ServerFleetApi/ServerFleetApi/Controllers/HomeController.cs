using Microsoft.AspNetCore.Mvc;

namespace ServerFleet.Api.Controllers
{
    [Route("[Controller]")]
    public class HomeController : Controller
    {
        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }
    }
}