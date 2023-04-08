using Microsoft.AspNetCore.Mvc;
using Models;
namespace Controllers;

[Route("api/faglar")]
[ApiController]
public class FaglarController : ControllerBase{
  private readonly List<Fagel> _faglar;

  public FaglarController(List<Fagel> faglar){
    _faglar = faglar;
  }

  [HttpGet]
  public ActionResult<IEnumerable<Fagel>> GetFaglar(){
    return _faglar.ToList();
  }

  [HttpPost]
  public ActionResult CreateFagel(Fagel fagel){
    if(_faglar.Any(p => p.fagelNamn.ToLower() == fagel.fagelNamn.ToLower())){
      return BadRequest($"Det finns redan en fågel med namnet {fagel.fagelNamn}");
    }
    
    _faglar.Add(fagel);

    return Ok();
  }
}