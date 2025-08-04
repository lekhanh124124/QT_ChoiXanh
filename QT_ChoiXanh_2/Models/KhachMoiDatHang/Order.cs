namespace QT_ChoiXanh_2.Models.KhachMoiDatHang
{
    public class Order
    {
        public string Id { get; set; }
        public string Sbg { get; set; }
        public string NguoiMua { get; set; }
        public string ThoiGian { get; set; }
        public string Status { get; set; }
    }

    public class OrderListResponse
    {
        public int RecordsTotal { get; set; }
        public int RecordsFiltered { get; set; }
        public List<Order> Data { get; set; }
    }
}