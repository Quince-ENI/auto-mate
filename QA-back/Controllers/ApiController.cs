using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("api/[controller]")]
[ApiController]
public class ApiController : ControllerBase
{
    private readonly ApiContext _context;

    public ApiController(ApiContext context)
    {
        _context = context;
    }

    // GET: api/Apis
    [HttpGet]
    public ActionResult<IEnumerable<Api>> GetApis()
    {
        return _context.Apis.ToList();
    }

    // GET: api/Apis/5
    [HttpGet("{id}")]
    public ActionResult<Api> GetApi(int id)
    {
        var api = _context.Apis.Find(id);
        if (api == null)
        {
            return NotFound();
        }
        return api;
    }

    // PUT: api/Apis/5
    [HttpPut("{id}")]
    public IActionResult UpdateApi(int id, Api api)
    {
        if (id != api.Id)
        {
            return BadRequest();
        }

        _context.Entry(api).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: api/Apis
    [HttpPost]
    public ActionResult<Api> CreateApi(Api api)
    {
        _context.Apis.Add(api);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetApi), new { id = api.Id }, api);
    }

    // DELETE: api/Apis/5
    [HttpDelete("{id}")]
    public IActionResult DeleteApi(int id)
    {
        var api = _context.Apis.Find(id);
        if (api == null)
        {
            return NotFound();
        }

        _context.Apis.Remove(api);
        _context.SaveChanges();

        return NoContent();
    }
}
