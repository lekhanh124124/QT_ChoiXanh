using Microsoft.AspNetCore.Mvc;

namespace QT_ChoiXanh_2.Controllers.Admin
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
