namespace QT_ChoiXanh_2.Models
{
    public class MenuItem
    {
        public string name { get; set; }
        public string lcss { get; set; }
        public string acss { get; set; }
        public string icss { get; set; }
        public string link { get; set; }
        public List<MenuItem> sub { get; set; }
    }
}
