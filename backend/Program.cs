using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.IdentityModel.Tokens;
using Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<List<Fagel>>(p => new List<Fagel>());
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Audience = "bf3e82eb-219e-4d63-b4de-767e807d7886";
        options.TokenValidationParameters.ValidIssuer = "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0";
        
        options.Authority = "https://login.microsoftonline.com/common/v2.0/";
        //options.Authority = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
    });
builder.Services.AddAuthorization();

var app = builder.Build();
app.UseStaticFiles();
app.UseSpa(options => { });

app.UseAuthentication();
app.UseAuthorization();
app.MapDefaultControllerRoute();


app.Run();
