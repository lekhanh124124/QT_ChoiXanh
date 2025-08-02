using Microsoft.AspNetCore.Mvc;
using QT_ChoiXanh_2.Models;

namespace QuanTriCRM.Controllers.KhachMoiDatHang
{
    [Route("admin/quanlykho/dathang")]
    public class DathangController : Controller
    {
        [Route("list.asp")]
        public IActionResult List()
        {
            return View("List");
        }

        [Route("fixorder.asp")]
        public IActionResult FixOrder([FromQuery] int act, [FromQuery] int gdc, [FromQuery] string IDBG)
        {
            // TODO: Thêm logic xử lý đơn hàng
            return RedirectToAction("List"); // Quay lại danh sách sau khi xử lý
        }

        [Route("vieworder.asp")]
        public IActionResult ViewOrder([FromQuery] int act, [FromQuery] int gdc, [FromQuery] string id)
        {
            // TODO: Thêm logic xem chi tiết đơn hàng
            return RedirectToAction("List"); // Quay lại danh sách sau khi xem
        }
    }
}