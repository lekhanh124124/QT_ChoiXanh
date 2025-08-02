using Microsoft.AspNetCore.Mvc;

namespace QT_ChoiXanh_2.Controllers.Comments
{
    public class CommentsController : Controller
    {
        public IActionResult Form()
        {
            return View();
        }
    }
}
