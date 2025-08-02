namespace QT_ChoiXanh_2.Models
{
    public class NoiDungItem
    {
        public string id { get; set; }
        public string thoigian { get; set; }
        public string status { get; set; }
        public string ord { get; set; }
        public string sx { get; set; }
        public string capcha { get; set; }
        public string kieuhienthi { get; set; }
        public string maboloc { get; set; }
        public string tieude { get; set; }
    }
    public class NoiDungApiResponse
    {
        public int recordsTotal { get; set; }
        public int recordsFiltered { get; set; }
        public List<NoiDungItem> data { get; set; }
    }
}