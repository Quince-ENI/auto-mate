using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("responsable/[controller]")]
//[ResponsableController]
public class ResponsableController : ControllerBase
{
    private readonly Context _context;

    public ResponsableController(Context context)
    {
        _context = context;
    }

    // GET: responsable/Responsables
    [HttpGet]
    public ActionResult<IEnumerable<Responsable>> GetResponsables()
    {
        return _context.Responsables.ToList();
    }

    // GET: responsable/Responsables/5
    [HttpGet("{id}")]
    public ActionResult<Responsable> GetResponsable(int id)
    {
        var responsable = _context.Responsables.Find(id);
        if (responsable == null)
        {
            return NotFound();
        }
        return responsable;
    }

    // PUT: responsable/Responsables/5
    [HttpPut("{id}")]
    public IActionResult UpdateResponsable(int id, Responsable responsable)
    {
        if (id != responsable.idResponsable)
        {
            return BadRequest();
        }

        _context.Entry(responsable).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: responsable/Responsables
    [HttpPost]
    public ActionResult<Responsable> CreateResponsable(Responsable responsable)
    {
        _context.Responsables.Add(responsable);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetResponsable), new { id = responsable.idResponsable }, responsable);
    }

    // DELETE: responsable/Responsables/5
    [HttpDelete("{id}")]
    public IActionResult DeleteResponsable(int id)
    {
        var responsable = _context.Responsables.Find(id);
        if (responsable == null)
        {
            return NotFound();
        }

        _context.Responsables.Remove(responsable);
        _context.SaveChanges();

        return NoContent();
    }
}
