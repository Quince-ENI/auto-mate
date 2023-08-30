using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;

[Route("[controller]")]
[Controller]
public class SiteController : ControllerBase
{
    private readonly Context _context;

    public SiteController(Context context)
    {
        _context = context;
    }

    // GET: Sites
    [HttpGet]
    public ActionResult<IEnumerable<Site>> GetSites()
    {
        return _context.Sites.ToList();
    }

    // GET: Sites/5
    [HttpGet("{id}")]
    public ActionResult<Site> GetSite(int id)
    {
        var site = _context.Sites.Find(id);
        if (site == null)
        {
            return NotFound();
        }
        return site;
    }

    // PUT: Sites/5
    [HttpPut("{id}")]
    public IActionResult UpdateSite(int id, Site site)
    {
        if (id != site.idSite)
        {
            return BadRequest();
        }

        _context.Entry(site).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: Sites
    [HttpPost]
    public ActionResult<Site> CreateSite(Site site)
    {
        _context.Sites.Add(site);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetSite), new { id = site.idSite }, site);
    }

    // DELETE: Sites/5
    [HttpDelete("{id}")]
    public IActionResult DeleteSite(int id)
    {
        var site = _context.Sites.Find(id);
        if (site == null)
        {
            return NotFound();
        }

        _context.Sites.Remove(site);
        _context.SaveChanges();

        return NoContent();
    }
}
