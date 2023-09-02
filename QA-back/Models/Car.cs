using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QA_back.Models;

[Table("car")]
public class Car
{
    [Key]
    public int idCar { get; set; }
    public string? Immatriculation { get; set; }
    public string? Type { get; set; }
    public string? Marque { get; set; }
    public string? Modele { get; set; }
    public string? Couleur { get; set; }
    [Column("Nombre de Portes")]
    public int Nb_Portes { get; set; }
    public int Disponibilité { get; set; }
    [Column("Nombre de Km")]
    public int Nb_Km { get; set; }
    public int key { get; set; }
}
