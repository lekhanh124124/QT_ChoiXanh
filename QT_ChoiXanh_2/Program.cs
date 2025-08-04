using Microsoft.EntityFrameworkCore;
using QT_ChoiXanh_2.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSession();

// Add HttpClient services
builder.Services.AddHttpClient();

// Configure Entity Framework Core
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseSession();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "admin_member",
        pattern: "admin/member/browser.asp",
        defaults: new { controller = "Member", action = "Browser" });

    endpoints.MapControllerRoute(
        name: "admin_home",
        pattern: "admin",
        defaults: new { controller = "Admin", action = "Index" });

    endpoints.MapControllerRoute(
        name: "ThongKe",
        pattern: "admin/quanlywebsite/thongke/form.asp",
        defaults: new { controller = "ThongKe", action = "Form" });

    endpoints.MapControllerRoute(
        name: "comments",
        pattern: "admin/congty/comments/form.asp",
        defaults: new { controller = "Comments", action = "Form" });

    endpoints.MapControllerRoute(
        name: "filters",
        pattern: "admin/filter/catalog/list.asp",
        defaults: new { controller = "Filter", action = "Index" });

});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Account}/{action=Login}/{id?}");

app.Run();