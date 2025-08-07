using Microsoft.AspNetCore.Mvc;
using QT_ChoiXanh_2.Models;

namespace QT_ChoiXanh_2.Controllers.ChuyenNhomBaiViet
{
    [Route("admin/part/partmaster")]
    public class PartMasterController : Controller
    {
        [Route("list.asp")]
        public IActionResult List()
        {
            return View();
        }

        [Route("list-full.asp")]
        public IActionResult ListFull()
        {
            return View();
        }

        [Route("register.asp")]
        public IActionResult Register(int? IDPart)
        {
            ViewBag.IDPart = IDPart;
            return View();
        }
    }
}