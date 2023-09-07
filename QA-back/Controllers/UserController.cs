using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QA_back.Models;
using System.Diagnostics;
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
        return _context.User.Include(u => u.Site).Include(u => u.TravelUsers)
            .ThenInclude(ut => ut.Travel).ToList();
    }

    // GET: User/5
   [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id)
    {
        var user = _context.User
            .Include(u => u.Site)  // Inclut les données du site associé à l'utilisateur
            .Include(u => u.TravelUsers)  // Inclut les données de la table de jointure
            .ThenInclude(ut => ut.Travel)  // Inclut les données des trajets liés à l'utilisateur via la table de jointure
            .SingleOrDefault(u => u.registration_number == id);  // Trouve l'utilisateur spécifique par son ID

        if (user == null)
        {
            return NotFound();  // Retourne un code d'état HTTP 404 si l'utilisateur n'est pas trouvé
        }

        return Ok(user);  // Retourne l'utilisateur trouvé avec un code d'état HTTP 200
}


    // GET: User/byEmail?mail=example@email.com
    [HttpGet("byEmail")]
    public ActionResult<User> GetUserbyEmail(string mail)
    {
        var user = _context.User.Include(u => u.Site).SingleOrDefault(u => u.mail == mail);
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
