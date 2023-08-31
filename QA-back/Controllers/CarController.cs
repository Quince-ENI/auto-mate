using Microsoft.AspNetCore.Mvc;
using QA_back.Models;
using System.Collections.Generic;
using System.Linq;

namespace QA_back.Controllers
{

    [Route("[controller]")]
    [Controller]
    public class CarController : ControllerBase
    {
        private readonly Context _context;

        public CarController(Context context)
        {
            _context = context;
        }

        // GET: Car
        [HttpGet]
        public ActionResult<IEnumerable<Car>> GetCars()
        {
            return _context.Car.ToList();
        }

        // GET: Car/5
        [HttpGet("{id}")]
        public ActionResult<Car> GetCar(int id)
        {
            var car = _context.Car.Find(id);
            if (car == null)
            {
                return NotFound();
            }
            return car;
        }

        // PUT: Car/5
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

        // POST: Car
        [HttpPost]
        public ActionResult<Car> CreateCar(Car car)
        {
            _context.Car.Add(car);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetCar), new { id = car.idCar }, car);
        }

        // DELETE: Car/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCar(int id)
        {
            var car = _context.Car.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Car.Remove(car);
            _context.SaveChanges();

            return NoContent();
        }
    }
}