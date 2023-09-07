using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QA_back.Models;
using System.Diagnostics;
using System.Linq;

namespace QA_back.Controllers;


[Route("[controller]")]
[ApiController]
public class TravelController : ControllerBase
{
    private readonly Context _context;

    public TravelController(Context context)
    {
        _context = context;
    }

    // GET: Travel
    [HttpGet]
    public ActionResult<IEnumerable<Travel>> GetTravels()
    {
        return _context.Travel
            .Include(t => t.Car)
                .ThenInclude(c => c.Site)
            .Include(t => t.TravelUsers)
                .ThenInclude(tu => tu.User)
        .ToList();
    }

    // GET: Travel/5
    [HttpGet("{id}")]
    public ActionResult<Travel> GetTravel(int id)
    {
        var travel = _context.Travel.Find(id);
        if (travel == null)
        {
            return NotFound();
        }
        return travel;
    }

    [HttpGet("{id}/with-car")]
    public ActionResult<Travel> GetTravelWithCar(int id)
    {
        var travel = _context.Travel.Include(t => t.Car).SingleOrDefault(t => t.idCar == id);

        if (travel == null)
        {
            return NotFound();
        }

        return travel;
    }

    // GET: Travel/Carpooling
    [HttpGet("Carpooling")]
    public ActionResult<IEnumerable<Travel>> GetCarpoolingTravels()
    {
        var carpoolingTravels = _context.Travel.Where(t => t.carpooling == 1).ToList();
        if (carpoolingTravels == null)
        {
            return NotFound();
        }
        return carpoolingTravels;
    }

    // // GET: Travel/User/5
    // [HttpGet("UserTravels")]
    // public ActionResult<IEnumerable<Travel>> GetUserTravels(int id)
    // {
    //     var userTravels = _context.Travel.Where(t => t.user == id).ToList();
    //     if (userTravels == null)
    //     {
    //         return NotFound();
    //     }
    //     return userTravels;
    // }

    // GET: Travel/Site/
    [HttpGet("SiteTravels")]
    public ActionResult<IEnumerable<Travel>> GetSiteTravels(string city)
    {
        var siteTravels = _context.Travel.Where(t => t.departure_city == city).ToList();
        if (siteTravels == null)
        {
            return NotFound();
        }
        return siteTravels;
    }

    // // PUT: Travel/5
    // [HttpPut("{id}")]
    // public IActionResult UpdateTravel(int id, Travel travel)
    // {
    //     if (id != travel.idRoute)
    //     {
    //         return BadRequest();
    //     }

    //     _context.Entry(travel).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
    //     _context.SaveChanges();

    //     return NoContent();
    // }

    [HttpPut("/AddUserToTravel/{userId}/{travelId}")]
    public async Task<IActionResult> AddUserToTravel(int userId, int travelId)
    {
        Console.WriteLine("TEEEEEEEEEEEEEEEESSSSSSSSSSSSSSSSSSSSSST");
        Console.WriteLine(userId);
        Console.WriteLine(travelId);
        // Trouver le trajet et l'utilisateur dans la base de données
        var travel = _context.Travel.Find(travelId);
        Console.WriteLine(travel);
        var user = _context.User.Find(userId);
        Console.WriteLine(user);

        if (travel == null || user == null)
        {
            return NotFound();
        }

        // Vérifier si l'utilisateur est déjà associé au trajet
        var existingTravelUser = await _context.TravelUser
            .FirstOrDefaultAsync(ut => ut.idRoute == travelId && ut.registration_number == userId);

        if (existingTravelUser != null)
        {
            return BadRequest("The user is already added to the travel.");
        }

        // Vérifier si des places sont encore disponibles
        if (travel.remaining_seats <= 0)
        {
            return BadRequest("No remaining seats available.");
        }

        // Créer la nouvelle relation dans la table de jointure
        var newTravelUser = new TravelUser
        {
            idRoute = userId,
            registration_number = travelId
        };

        // Diminuer le nombre de places disponibles
        travel.remaining_seats--;

        // Ajouter la nouvelle relation à la table de jointure
        await _context.TravelUser.AddAsync(newTravelUser);

        // Sauvegarder les changements
        await _context.SaveChangesAsync();

        return NoContent();
    }


    // PUT: Travel/5
    //[HttpPut("{id}")]
    //public IActionResult ValidateTravel(int id, Travel travel)
    //{
    //    if (id != travel.idRoute)
    //    {
    //        return BadRequest();
    //    }

    //    _context.Entry(travel).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
    //    _context.SaveChanges();

    //    return NoContent();
    //}

    // POST: Travel
 [HttpPost]
  public ActionResult<Travel> CreateTravel(Travel travel, int userId)
  {
      // Trouver la voiture et l'utilisateur dans la base de données
      var car = _context.Car.Find(travel.idCar);
      var user = _context.User.Find(userId);

      // Vérifier si la voiture ou l'utilisateur n'existe pas
      if (car == null || user == null)
      {
          return NotFound("Car or User not found");
      }

      // Associer la voiture au trajet
      travel.Car = car;

      // Ajouter le trajet à la base de données
      _context.Travel.Add(travel);

      // Sauvegarder les changements pour obtenir l'ID généré pour le trajet
      _context.SaveChanges();

      // Utiliser l'ID généré pour créer la relation dans la table de jointure
      var travelUser = new TravelUser
      {
          idRoute = travel.idRoute, // ici, idRoute est l'ID généré
          registration_number = userId // ou tout autre identifiant que vous utilisez pour User
      };

      // Ajouter cette relation à la base de données
      _context.TravelUser.Add(travelUser);

      // Sauvegarder à nouveau les changements
      _context.SaveChanges();

      // Charger le trajet créé, avec toutes les relations nécessaires
      var loadedTravel = _context.Travel
          .Include(t => t.Car).ThenInclude(c => c.Site)
          .Include(t => t.TravelUsers).ThenInclude(tu => tu.User)
          .Single(t => t.idRoute == travel.idRoute);

      return CreatedAtAction(nameof(GetTravel), new { id = loadedTravel.idRoute }, loadedTravel);
  }



    // DELETE: Travel/5
    [HttpDelete("{id}")]
    public IActionResult DeleteTravel(int id)
    {
        var travel = _context.Travel.Find(id);
        if (travel == null)
        {
            return NotFound();
        }

        _context.Travel.Remove(travel);
        _context.SaveChanges();

        return NoContent();
    }
}
