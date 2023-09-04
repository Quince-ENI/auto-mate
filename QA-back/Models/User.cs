using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QA_back.Models;

[Table("user")]
public class User
{
    [Key]
    public int registration_number { get; set; }
    public string? name { get; set; }
    public string? first_name { get; set; }
    public string? mail { get; set; }
    public string? tel { get; set; }
    public string? role { get; set; }
    public int idSite { get; set; }
    [ForeignKey("idSite")]
    public Site Site { get; set; }
}
