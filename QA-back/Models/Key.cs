using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QA_back.Models;

public class Key
{
    [Key]
    public int idKey { get; set; }
    public string? location { get; set; }
    public int available { get; set; }
}
