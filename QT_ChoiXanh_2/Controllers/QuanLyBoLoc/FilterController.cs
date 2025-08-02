using Microsoft.AspNetCore.Mvc;
using QT_ChoiXanh_2.Models;

namespace QT_ChoiXanh_2.Controllers.QuanLyBoLoc
{
    public class FilterController : Controller
    {
        public IActionResult Index()
        {
            var list = new List<MenuItem>();
            return View(list);
        }
    }
}
