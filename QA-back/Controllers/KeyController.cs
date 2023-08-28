using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("key/[controller]")]
//[KeyController]
public class KeyController : ControllerBase
{
    private readonly Context _context;

    public KeyController(Context context)
    {
        _context = context;
    }

    // GET: key/Keys
    [HttpGet]
    public ActionResult<IEnumerable<Key>> GetKeys()
    {
        return _context.Keys.ToList();
    }

    // GET: key/Keys/5
    [HttpGet("{id}")]
    public ActionResult<Key> GetKey(int id)
    {
        var key = _context.Keys.Find(id);
        if (key == null)
        {
            return NotFound();
        }
        return key;
    }

    // PUT: key/Keys/5
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

    // POST: key/Keys
    [HttpPost]
    public ActionResult<Key> CreateKey(Key key)
    {
        _context.Keys.Add(key);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetKey), new { id = key.idKey }, key);
    }

    // DELETE: key/Keys/5
    [HttpDelete("{id}")]
    public IActionResult DeleteKey(int id)
    {
        var key = _context.Keys.Find(id);
        if (key == null)
        {
            return NotFound();
        }

        _context.Keys.Remove(key);
        _context.SaveChanges();

        return NoContent();
    }
}
