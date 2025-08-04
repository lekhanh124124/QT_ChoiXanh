using Microsoft.AspNetCore.Mvc;
using QT_ChoiXanh_2.Models;
using System;

namespace QT_ChoiXanh_2.Controllers.KhachMoiDatHang
{
    public class DathangController : Controller
    {
        [Route("admin/quanlykho/dathang/list.asp")]
        public IActionResult List()
        {
            return View("List");
        }

        [Route("admin/quanlykho/dathang/register.asp")]
        public IActionResult XuLyDatHang(int act, int gdc, int IDBG)
        {
            ViewBag.OrderId = IDBG;
            ViewBag.Act = act;
            ViewBag.Gdc = gdc;
            return View("XuLyDatHang");
        }
    }
}