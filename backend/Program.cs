using Microsoft.AspNetCore.Builder;
using Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<List<Fagel>>(p => new List<Fagel>());

var app = builder.Build();
app.MapDefaultControllerRoute();
app.UseStaticFiles();
app.UseSpa(options => { });

app.Run();
