using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("road/[controller]")]
//[RoadController]
public class RoadController : ControllerBase
{
    private readonly Context _context;

    public RoadController(Context context)
    {
        _context = context;
    }

    // GET: road/Roads
    [HttpGet]
    public ActionResult<IEnumerable<Road>> GetRoads()
    {
        return _context.Roads.ToList();
    }

    // GET: road/Roads/5
    [HttpGet("{id}")]
    public ActionResult<Road> GetRoad(int id)
    {
        var road = _context.Roads.Find(id);
        if (road == null)
        {
            return NotFound();
        }
        return road;
    }

    // PUT: road/Roads/5
    [HttpPut("{id}")]
    public IActionResult UpdateRoad(int id, Road road)
    {
        if (id != road.idRoute)
        {
            return BadRequest();
        }

        _context.Entry(road).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: road/Roads
    [HttpPost]
    public ActionResult<Road> CreateRoad(Road road)
    {
        _context.Roads.Add(road);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetRoad), new { id = road.idRoute }, road);
    }

    // DELETE: road/Roads/5
    [HttpDelete("{id}")]
    public IActionResult DeleteRoad(int id)
    {
        var road = _context.Roads.Find(id);
        if (road == null)
        {
            return NotFound();
        }

        _context.Roads.Remove(road);
        _context.SaveChanges();

        return NoContent();
    }
}
