using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QA_back.Models;

[Table("site")]
public class Site
{
    [Key]
    public int idSite { get; set; }
    public string? name { get; set; }
    public string? address { get; set; }
    public string? city { get; set; }
    public int departement { get; set; }
    public int postal_code { get; set; }
}
