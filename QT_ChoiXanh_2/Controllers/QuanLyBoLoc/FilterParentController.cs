using Microsoft.AspNetCore.Mvc;

namespace QT_ChoiXanh_2.Controllers.QuanLyBoLoc
{
    public class FilterParentController : Controller
    {
        // Đổi tên action thành Index và nhận tham số id
        public IActionResult Index(int id)
        {
            ViewBag.ParentId = id;
            return View();
        }
    }
}
