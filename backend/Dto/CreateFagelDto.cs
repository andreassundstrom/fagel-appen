using Fagelappen.Models;

namespace fagelappen.Dto;
public class CreateFagelDto
{
    public int? FagelId { get; set; }
    public string FagelNamn { get; set; } = string.Empty;
    public string? FagelLatin { get; set; } = string.Empty;
    public int OrdningId { get; set; }
}