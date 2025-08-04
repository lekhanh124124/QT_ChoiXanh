using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QT_ChoiXanh_2.Models;

namespace QT_ChoiXanh_2.Controllers.QuanTriNoiDung
{
    [Route("admin/part/parent")]
    public class QT_NoiDungController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public QT_NoiDungController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [Route("list.asp")]
        public async Task<IActionResult> QT_NoiDung(int? pageSize, string searchTerm, int page = 1, string sortColumn = "ord", string sortDirection = "asc")
        {
            try
            {
                int size = pageSize ?? 100;
                int currentPage = Math.Max(1, page);
                int start = (currentPage - 1) * size;
                string searchValue = !string.IsNullOrEmpty(searchTerm) ? Uri.EscapeDataString(searchTerm) : "";

                // Mapping column names
                var columnMapping = new Dictionary<string, int>
                {
                    { "ord", 0 },
                    { "tieude", 1 },
                    { "thoigian", 2 }
                };

                int orderColumn = columnMapping.ContainsKey(sortColumn) ? columnMapping[sortColumn] : 0;
                string orderDir = sortDirection == "desc" ? "desc" : "asc";

                string apiUrl = $"https://demodienmay.125.atoz.vn/admin/api/web.danhsach.idparent.asp?id6=1&draw=1&columns%5B0%5D%5Bdata%5D=ord&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=tieude&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=thoigian&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=kieuhienthi&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=false&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D={orderColumn}&order%5B0%5D%5Bdir%5D={orderDir}&start={start}&length={size}&search%5Bvalue%5D={searchValue}&search%5Bregex%5D=false&pageid=1&_=1753691696399";

                var client = _httpClientFactory.CreateClient("ApiClient");
                var response = await client.GetStringAsync(apiUrl);
                var data = JsonConvert.DeserializeObject<NoiDungApiResponse>(response);

                if (data?.data == null)
                {
                    data = new NoiDungApiResponse { data = new List<NoiDungItem>(), recordsTotal = 0, recordsFiltered = 0 };
                }

                // Calculate pagination
                int totalRecords = data.recordsTotal;
                int totalPages = (int)Math.Ceiling((double)totalRecords / size);
                int startRecord = totalRecords > 0 ? start + 1 : 0;
                int endRecord = Math.Min(start + size, totalRecords);

                // Pass data to View
                ViewBag.SearchTerm = searchTerm;
                ViewBag.CurrentPage = currentPage;
                ViewBag.TotalPages = totalPages;
                ViewBag.PageSize = size;
                ViewBag.TotalRecords = totalRecords;
                ViewBag.StartRecord = startRecord;
                ViewBag.EndRecord = endRecord;
                ViewBag.HasPreviousPage = currentPage > 1;
                ViewBag.HasNextPage = currentPage < totalPages;
                ViewBag.SortColumn = sortColumn;
                ViewBag.SortDirection = sortDirection;

                return View(data.data);
            }
            catch (HttpRequestException ex)
            {
                // Handle network errors
                ViewBag.ErrorMessage = "Không thể kết nối đến server. Vui lòng thử lại sau.";
                return View(new List<NoiDungItem>());
            }
            catch (JsonException ex)
            {
                // Handle JSON parsing errors
                ViewBag.ErrorMessage = "Dữ liệu không hợp lệ từ server.";
                return View(new List<NoiDungItem>());
            }
            catch (Exception ex)
            {
                // Handle other errors
                ViewBag.ErrorMessage = "Đã xảy ra lỗi. Vui lòng thử lại sau.";
                return View(new List<NoiDungItem>());
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateOrd(string id, string newOrd)
        {
            try
            {
                var client = _httpClientFactory.CreateClient("ApiClient");

                // Create form data
                var formData = new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("id", id),
                    new KeyValuePair<string, string>("ord", newOrd),
                    new KeyValuePair<string, string>("action", "update_ord")        
                };

                var encodedContent = new FormUrlEncodedContent(formData);
                string updateApiUrl = "https://demodienmay.125.atoz.vn/admin/api/web.update.ord.asp";

                var response = await client.PostAsync(updateApiUrl, encodedContent);

                if (response.IsSuccessStatusCode)
                {
                    var responseContent = await response.Content.ReadAsStringAsync();
                    return Json(new
                    {
                        success = true,
                        message = "Cập nhật ORD thành công",
                        newOrd
                    });
                }

                return Json(new
                {
                    success = false,
                    message = "Không thể cập nhật ORD. Vui lòng thử lại."
                });
            }
            catch (HttpRequestException ex)
            {
                return Json(new
                {
                    success = false,
                    message = "Lỗi kết nối: " + ex.Message
                });
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    success = false,
                    message = "Lỗi hệ thống: " + ex.Message
                });
            }
        }
    }
}