using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("[controller]")]
[ApiController]
public class KeyController : ControllerBase
{
    private readonly Context _context;

    public KeyController(Context context)
    {
        _context = context;
    }

    // GET: Key
    [HttpGet]
    public ActionResult<IEnumerable<Key>> GetKeys()
    {
        return _context.Key.ToList();
    }

    // GET: Key/5
    [HttpGet("{id}")]
    public ActionResult<Key> GetKey(int id)
    {
        var key = _context.Key.Find(id);
        if (key == null)
        {
            return NotFound();
        }
        return key;
    }

    // PUT: Key/5
    [HttpPut("{id}")]
    public IActionResult UpdateKey(int id, Key key)
    {
        if (id != key.idKey)
        {
            return BadRequest();
        }

        _context.Entry(key).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: Key
    [HttpPost]
    public ActionResult<Key> CreateKey(Key key)
    {
        _context.Key.Add(key);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetKey), new { id = key.idKey }, key);
    }

    // DELETE: Key/5
    [HttpDelete("{id}")]
    public IActionResult DeleteKey(int id)
    {
        var key = _context.Key.Find(id);
        if (key == null)
        {
            return NotFound();
        }

        _context.Key.Remove(key);
        _context.SaveChanges();

        return NoContent();
    }
}
