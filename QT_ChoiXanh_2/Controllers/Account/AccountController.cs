using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QT_ChoiXanh_2.Models;
using System.Security.Cryptography;
using System.Text;

namespace LoginPageApp.Controllers
{
    public class AccountController : Controller
    {
        private readonly AppDbContext _context;

        public AccountController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(new { success = false, message = "Vui lòng nhập đầy đủ thông tin." });
            }

            // Compute MD5 hash of the input password
            using var md5 = MD5.Create();
            var inputBytes = Encoding.UTF8.GetBytes(model.MemberPassword);
            var hashBytes = md5.ComputeHash(inputBytes);
            var hashedPassword = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();

            // Check credentials in the database
            var user = await _context.CustomerInfor
                .FirstOrDefaultAsync(u => u.CustomerUsername == model.MemberUsername && u.CustomerPassword == hashedPassword);

            if (user != null)
            {
                // Simulate session or authentication (e.g., set a session variable or use ASP.NET Identity)
                HttpContext.Session.SetString("UserName", model.MemberUsername);
                return Json(new { success = true, message = "Đăng nhập thành công!" });
            }

            return Json(new { success = false, message = "Tên đăng nhập hoặc mật khẩu không đúng." });
        }

        [HttpGet]
        public IActionResult ForgotPassword()
        {
            return View();
        }
    }
}