using Microsoft.EntityFrameworkCore;
using Models;

namespace Fagelappen.Models;
public class FagelappenContext : DbContext
{
	public FagelappenContext(DbContextOptions<FagelappenContext> options) : base(options)
	{

	}

	public virtual DbSet<Fagel> Fagel { get; set; }
	public virtual DbSet<Ordning> Ordning { get; set; }
	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.Entity<Ordning>().HasData(new Ordning[]
		{
			new Ordning { OrdningId = 1, OrdningNamn = "Andfåglar", OrdningLatin = "Anseriformes", OrdningBeskrivning = "" },
			new Ordning { OrdningId = 2, OrdningNamn = "Ugglefåglar", OrdningLatin = "Strigiformes", OrdningBeskrivning = "" },
			new Ordning { OrdningId = 3, OrdningNamn = "Tättingar", OrdningLatin = "Passeriformes", OrdningBeskrivning = "" },
		});
	}
}