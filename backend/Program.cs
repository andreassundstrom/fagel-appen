using Fagelappen.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.IdentityModel.Tokens;
using Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Audience = builder.Configuration["Jwt:Audience"];
        options.TokenValidationParameters.ValidIssuer = builder.Configuration["Jwt:Issuer"];
        options.Authority = builder.Configuration["Jwt:Authority"];
    });
builder.Services.AddAuthorization();
builder.Services.AddNpgsql<FagelappenContext>(builder.Configuration.GetConnectionString("db"));
var app = builder.Build();

// Migrera databasen vid startup för dev
if (app.Configuration.GetSection("Startup:MigrateDatabase").Get<bool>())
{
    using(var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<FagelappenContext>();
        db.Database.EnsureCreated();
    }
}

app.UseStaticFiles();
app.UseSpa(options => { });

app.UseAuthentication();
app.UseAuthorization();
app.MapDefaultControllerRoute();


app.Run();
