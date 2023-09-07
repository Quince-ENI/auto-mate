using Microsoft.VisualStudio.TestTools.UnitTesting;
using QA_back.Controllers;
using QA_back.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Mvc;


namespace QA_back.Controllers.Tests
{
    [TestClass()]
    public class CarControllerTests
    {
        private Context _context;
        private CarController _controller;

        [TestInitialize]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<Context>()
               .UseInMemoryDatabase(databaseName: "InMemoryDbForTesting")
               .Options;

            _context = new Context(options);
            _context.Database.EnsureDeleted();
            _context.Database.EnsureCreated();

            var testCar1 = new Car
            {
                idCar = 2,
                Immatriculation = "HJ476LO",
                Marque = "Aston Martin",
                Modele = "Twingo",
                Couleur = "Mauve",
                Nb_Portes = 7,
                Disponibilité = 1,
                Nb_Km = 6765787,
                key = 3,
                idSite = 5
            };

            var testCar2 = new Car
            {
                idCar = 3,
                Immatriculation = "KN384NF",
                Marque = "Lamborghini",
                Modele = "Clio",
                Couleur = "Turquoise",
                Nb_Portes = 1,
                Disponibilité = 0,
                Nb_Km = 7382,
                key = 4,
                idSite = 5
            };

            _context.Car.AddRange(testCar1, testCar2);
            _context.SaveChanges();

            _controller = new CarController(_context);
        }

        [TestCleanup]
        public void Cleanup()
        {
            _context.Database.EnsureDeleted();
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(1)]
        public void GetCarsTest()
        {
            // Arrange
            var testCar = new Car { /* attributs de votre voiture ici */ };
            _context.Car.Add(testCar);
            _context.SaveChanges();

            // Act
            var result = _controller.GetCars();

            // Assert
            var countBeforeCall = _context.Car.Count();
            Assert.AreEqual(3, countBeforeCall);

            Assert.AreEqual(3, result.Value.Count());
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(2)]
        public void GetCarTest()
        {
            // Arrange
            var testCar = new Car { idCar = 1 /*, autres attributs de votre voiture ici*/ };
            _context.Car.Add(testCar);
            _context.SaveChanges();

            // Act
            var result = _controller.GetCar(testCar.idCar);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(testCar, result.Value);
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(3)]

        public void UpdateCarTest()
        {
            // Arrange
            var testCar = new Car { idCar = 1 /*, autres attributs de votre voiture ici*/ };
            _context.Car.Add(testCar);
            _context.SaveChanges();

            testCar.Marque = "Aston Martin";  // changeons un attribut pour le mettre à jour

            // Act
            var result = _controller.UpdateCar(testCar.idCar, testCar);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NoContentResult));
            var updatedCar = _context.Car.Find(testCar.idCar);
            Assert.AreEqual("Aston Martin", updatedCar.Marque); // vérifier que l'attribut a été mis à jour
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(4)]
        public void CreateCarTest()
        {
            // Arrange
            var testCar = new Car { /*attributs de votre voiture ici*/ };

            // Act
            var result = _controller.CreateCar(testCar);

            // Assert
            var createdAtActionResult = result.Result as CreatedAtActionResult;
            Assert.IsNotNull(createdAtActionResult);
            var createdCar = createdAtActionResult.Value as Car;
            Assert.IsNotNull(createdCar);
            Assert.AreEqual(3, _context.Car.Count());
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(5)]
        public void DeleteCarTest()
        {
            // Arrange
            var testCar = new Car { idCar = 1 /*, autres attributs de votre voiture ici*/ };
            _context.Car.Add(testCar);
            _context.SaveChanges();

            // Act
            var result = _controller.DeleteCar(testCar.idCar);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NoContentResult));
            Assert.IsNull(_context.Car.Find(testCar.idCar)); // la voiture devrait avoir été supprimée
        }
    }
}