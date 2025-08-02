using Microsoft.AspNetCore.Mvc;
using QT_ChoiXanh_2.Models;

namespace QuanTriCRM.Controllers.QuanLyLienHe
{
    [Route("admin/congty/contact")]
    public class ContactController : Controller
    {
        [Route("form.asp")]
        public IActionResult Form()
        {
            return View();
        }
    }
}