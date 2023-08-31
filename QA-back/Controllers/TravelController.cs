using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
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
        return _context.Travel.ToList();
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

    // PUT: Travel/5
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

    // POST: Travel
    [HttpPost]
    public ActionResult<Travel> CreateTravel(Travel travel)
    {
        _context.Travel.Add(travel);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetTravel), new { id = travel.idRoute }, travel);
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
