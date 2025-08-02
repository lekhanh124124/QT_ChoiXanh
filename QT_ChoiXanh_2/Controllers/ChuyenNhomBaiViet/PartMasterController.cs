using Microsoft.AspNetCore.Mvc;
using QT_ChoiXanh_2.Models;

namespace QuanTriCRM.Controllers.ChuyenNhomBaiViet
{
    [Route("admin/part/partmaster")]
    public class PartMasterController : Controller
    {
        [Route("list.asp")]
        public IActionResult List()
        {
            return View();
        }
    }
}