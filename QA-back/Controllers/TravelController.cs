using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("[controller]")]
[Controller]
public class TravelController : ControllerBase
{
    private readonly Context _context;

    public TravelController(Context context)
    {
        _context = context;
    }

    // GET: Travels
    [HttpGet]
    public ActionResult<IEnumerable<Travel>> GetTravels()
    {
        return _context.Travels.ToList();
    }

    // GET: Travels/5
    [HttpGet("{id}")]
    public ActionResult<Travel> GetTravel(int id)
    {
        var travel = _context.Travels.Find(id);
        if (travel == null)
        {
            return NotFound();
        }
        return travel;
    }

    // PUT: Travels/5
    [HttpPut("{id}")]
    public IActionResult UpdateTravel(int id, Travel travel)
    {
        if (id != travel.idRoute)
        {
            return BadRequest();
        }

        _context.Entry(travel).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: Travels
    [HttpPost]
    public ActionResult<Travel> CreateTravel(Travel travel)
    {
        _context.Travels.Add(travel);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetTravel), new { id = travel.idRoute }, travel);
    }

    // DELETE: Travels/5
    [HttpDelete("{id}")]
    public IActionResult DeleteTravel(int id)
    {
        var travel = _context.Travels.Find(id);
        if (travel == null)
        {
            return NotFound();
        }

        _context.Travels.Remove(travel);
        _context.SaveChanges();

        return NoContent();
    }
}
