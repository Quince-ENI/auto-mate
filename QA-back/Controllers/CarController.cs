using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Linq;

namespace QA_back.Controllers;


[Route("car/[controller]")]
//[CarController]
public class CarController : ControllerBase
{
    private readonly Context _context;

    public CarController(Context context)
    {
        _context = context;
    }

    // GET: car/Cars
    [HttpGet]
    public ActionResult<IEnumerable<Car>> GetCars()
    {
        return _context.Cars.ToList();
    }

    // GET: car/Cars/5
    [HttpGet("{id}")]
    public ActionResult<Car> GetCar(int id)
    {
        var car = _context.Cars.Find(id);
        if (car == null)
        {
            return NotFound();
        }
        return car;
    }

    // PUT: car/Cars/5
    [HttpPut("{id}")]
    public IActionResult UpdateCar(int id, Car car)
    {
        if (id != car.idCar)
        {
            return BadRequest();
        }

        _context.Entry(car).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    // POST: car/Cars
    [HttpPost]
    public ActionResult<Car> CreateCar(Car car)
    {
        _context.Cars.Add(car);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetCar), new { id = car.idCar }, car);
    }

    // DELETE: car/Cars/5
    [HttpDelete("{id}")]
    public IActionResult DeleteCar(int id)
    {
        var car = _context.Cars.Find(id);
        if (car == null)
        {
            return NotFound();
        }

        _context.Cars.Remove(car);
        _context.SaveChanges();

        return NoContent();
    }
}
