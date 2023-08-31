using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QA_back.Models;

public class Travel
{
    [Key]
    public int idRoute { get; set; }
    public string? departure_city { get; set; }
    public string? arrival_city { get; set; }
    public DateTime departure_time { get; set; }
    public DateTime arrival_time { get; set; }
    public int remaining_seats { get; set; }
    public int carpooling { get; set; }
    public int user { get; set; }
    public int car { get; set; }
}
