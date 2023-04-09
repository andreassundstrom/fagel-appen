using Fagelappen.Models;

namespace Models;

public class Fagel {
    public int FagelId { get; set; }
    public string FagelNamn {get;set;} = string.Empty;
    public string FagelLatin { get;set;} = string.Empty;
    public string SkapadAv {get; set;} = string.Empty;
    public int OrdningId { get; set; }
    public Ordning Ordning { get; set; }
    public DateTime Skapad { get; set; }
}