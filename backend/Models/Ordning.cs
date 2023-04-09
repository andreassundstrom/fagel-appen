namespace Fagelappen.Models;

public class Ordning
{
    public int OrdningId { get; set; }
    public string OrdningNamn { get; set; } = string.Empty;
    public string OrdningLatin { get; set; } = string.Empty;
    public string OrdningBeskrivning { get; set; } = string.Empty;
}