using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QA_back.Models;

public class Responsable
{
    [Key]
    public int idResponsable { get; set; }
    public string? name { get; set; }
    public string? first_name { get; set; }
    public string? mail { get; set; }
    public string? password { get; set; }
    public int tel { get; set; }
    public int site { get; set; }

}
