namespace QT_ChoiXanh_2.Models
{
    public class FilterCatalog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        public string HtmlPath { get; set; }
        public string Code { get; set; }
        public bool IsSearch { get; set; }
        public bool IsShow { get; set; }
        public bool IsMulti { get; set; }
        public bool IsGroup { get; set; }
    }
}
