using Microsoft.AspNetCore.Mvc;

namespace Controllers;

[Route("api/config")]
[ApiController]
public class ConfigController{
  private readonly IConfiguration _configuration;

  public ConfigController(IConfiguration configuration)
  {
    _configuration = configuration;
  }

  [HttpGet]
  public ActionResult<Dictionary<string,string>> GetConfiguration(){
    return _configuration.GetSection("Frontend").Get<Dictionary<string,string>>();
  }
}