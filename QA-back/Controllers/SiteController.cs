using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;

[Route("[controller]")]
[ApiController]
public class SiteController : ControllerBase
{
    private readonly Context _context;

    public SiteController(Context context)
    {
        _context = context;
    }

    // GET: Site
    [HttpGet]
    public ActionResult<IEnumerable<Site>> GetSites()
    {
        return _context.Site.ToList();
    }

    // GET: Site/5
    [HttpGet("{id}")]
    public ActionResult<Site> GetSite(int id)
    {
        var site = _context.Site.Find(id);
        if (site == null)
        {
            return NotFound();
        }
        return site;
    }

    // PUT: Site/5
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

    // POST: Site
    [HttpPost]
    public ActionResult<Site> CreateSite(Site site)
    {
        _context.Site.Add(site);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetSite), new { id = site.idSite }, site);
    }

    // DELETE: Site/5
    [HttpDelete("{id}")]
    public IActionResult DeleteSite(int id)
    {
        var site = _context.Site.Find(id);
        if (site == null)
        {
            return NotFound();
        }

        _context.Site.Remove(site);
        _context.SaveChanges();

        return NoContent();
    }
}
