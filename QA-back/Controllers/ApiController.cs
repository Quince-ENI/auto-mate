using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("api/[controller]")]
[ApiController]
public class ApiController : ControllerBase
{
    private readonly Context _context;

    public ApiController(Context context)
    {
        _context = context;
    }

    // GET: api/Apis
    [HttpGet]
    public ActionResult<IEnumerable<Api>> GetArticles()
    {
        return _context.Apis.ToList();
    }

    // GET: api/Apis/5
    [HttpGet("{id}")]
    public ActionResult<Api> GetArticle(int id)
    {
        var article = _context.Apis.Find(id);
        if (article == null)
        {
            return NotFound();
        }
        return article;
    }

    // PUT: api/Apis/5
    [HttpPut("{id}")]
    public IActionResult UpdateArticle(int id, Api article)
    {
        if (id != article.Id)
        {
            return BadRequest();
        }

        _context.Entry(article).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: api/Apis
    [HttpPost]
    public ActionResult<Api> CreateArticle(Api article)
    {
        _context.Apis.Add(article);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article);
    }

    // DELETE: api/Apis/5
    [HttpDelete("{id}")]
    public IActionResult DeleteArticle(int id)
    {
        var article = _context.Apis.Find(id);
        if (article == null)
        {
            return NotFound();
        }

        _context.Apis.Remove(article);
        _context.SaveChanges();

        return NoContent();
    }
}
