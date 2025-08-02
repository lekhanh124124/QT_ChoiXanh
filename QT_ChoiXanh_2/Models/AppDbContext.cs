using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace QT_ChoiXanh_2.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<CustomerInfor> CustomerInfor { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Ánh xạ lớp CustomerInfor với bảng dbo.Table_Customer_Infor
            modelBuilder.Entity<CustomerInfor>()
                .ToTable("Table_Customer_Infor", "dbo")
                .HasKey(c => c.CustomerID); // Chỉ định CustomerID là khóa chính
        }
    }

    public class CustomerInfor
    {
        [Key] // Đánh dấu CustomerID là khóa chính
        public int CustomerID { get; set; } // Thay đổi từ string sang int để khớp với kiểu dữ liệu trong bảng
        public string CustomerUsername { get; set; }
        public string CustomerPassword { get; set; }
    }
}