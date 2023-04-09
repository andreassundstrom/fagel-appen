using fagelappen.Dto;
using Fagelappen.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
namespace Controllers;

[Route("api/faglar")]
[ApiController]
public class FaglarController : ControllerBase{
    private readonly FagelappenContext _db;

    public FaglarController(FagelappenContext db){
        _db = db;
  }

  [HttpGet]
  public ActionResult<IEnumerable<Fagel>> GetFaglar(){
    return _db.Fagel.ToList();
  }

    [HttpGet("ordningar")]
    public ActionResult<IEnumerable<Ordning>> GetOrdningar()
    {
        return _db.Ordning.ToList();
    }

    [Authorize]
    [HttpPost]
    public ActionResult CreateFagel(CreateFagelDto fagelDto){
        if (User.Identity == null || User.Identity.Name == null)
            throw new ArgumentNullException("Användarnamn saknas");

        Fagel fagel = new Fagel() { 
            FagelNamn = fagelDto.FagelNamn,
            FagelLatin = fagelDto.FagelLatin ?? String.Empty,
            OrdningId = fagelDto.OrdningId,
            SkapadAv = User.Identity.Name,
            Skapad = DateTime.UtcNow
        };

        if(_db.Fagel.Any(p => p.FagelNamn.ToLower() == fagel.FagelNamn.ToLower())){
            return BadRequest($"Det finns redan en fågel med namnet {fagel.FagelNamn}");
        }
    
        _db.Fagel.Add(fagel);
        _db.SaveChanges();
        return Ok();
    }
}