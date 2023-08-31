using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly Context _context;

    public UserController(Context context)
    {
        _context = context;
    }

    // GET: User
    [HttpGet]
    public ActionResult<IEnumerable<User>> GetUsers()
    {
        return _context.User.ToList();
    }

    // GET: User/5
    [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id)
    {
        var user = _context.User.Find(id);
        if (user == null)
        {
            return NotFound();
        }
        return user;
    }

    // PUT: User/5
    [HttpPut("{id}")]
    public IActionResult UpdateUser(int id, User user)
    {
        if (id != user.registration_number)
        {
            return BadRequest();
        }

        _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: User
    [HttpPost]
    public ActionResult<User> CreateUser(User user)
    {
        _context.User.Add(user);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetUser), new { id = user.registration_number }, user);
    }

    // DELETE: User/5
    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id)
    {
        var user = _context.User.Find(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.User.Remove(user);
        _context.SaveChanges();

        return NoContent();
    }
}
