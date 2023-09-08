using Microsoft.VisualStudio.TestTools.UnitTesting;
using QA_back.Controllers;
using QA_back.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace QA_back.Controllers.Tests
{
    [TestClass()]
    public class KeyControllerTests
    {
        private Context _context;
        private KeyController _controller;

        [TestInitialize]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<Context>()
                .UseInMemoryDatabase(databaseName: "InMemoryDbForKeyTesting")
                .Options;

            _context = new Context(options);
            _context.Database.EnsureDeleted();
            _context.Database.EnsureCreated();

            var testKey1 = new Key
            {
                idKey = 2,
                available = 1, 
                location = "Singapour"
            };

            var testKey2 = new Key
            {
                idKey = 3,
                available = 0,
                location = "Brest"
            };

            _context.Key.AddRange(testKey1, testKey2);
            _context.SaveChanges();

            _controller = new KeyController(_context);
        }

        [TestCleanup]
        public void Cleanup()
        {
            _context.Database.EnsureDeleted();
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(1)]
        public void GetKeysTest()
        {
            // Arrange
            var testKey = new Key { /* Initialiser les attributs de votre Key ici */ };
            _context.Key.Add(testKey);
            _context.SaveChanges();

            // Act
            var result = _controller.GetKeys();

            // Assert
            Assert.AreEqual(3, result.Value.Count());
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(2)]
        public void GetKeyTest()
        {
            // Arrange
            var testKey = new Key { idKey = 1 /*, autres attributs du Key ici */ };
            _context.Key.Add(testKey);
            _context.SaveChanges();

            // Act
            var result = _controller.GetKey(testKey.idKey);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(testKey, result.Value);
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(3)]
        public void UpdateKeyTest()
        {
            // Arrange
            var testKey = new Key { idKey = 1 /*, autres attributs du Key ici */ };
            _context.Key.Add(testKey);
            _context.SaveChanges();

            testKey.location = "Sydney";  // Mettons à jour un attribut pour l'exemple

            // Act
            var result = _controller.UpdateKey(testKey.idKey, testKey);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NoContentResult));
            var updatedKey = _context.Key.Find(testKey.idKey);
            Assert.AreEqual("Sydney", updatedKey.location); // Vérifiez que l'attribut a été mis à jour
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(4)]
        public void CreateKeyTest()
        {
            // Arrange
            var testKey = new Key { /* Attributs du Key ici */ };

            // Act
            var result = _controller.CreateKey(testKey);

            // Assert
            var createdAtActionResult = result.Result as CreatedAtActionResult;
            Assert.IsNotNull(createdAtActionResult);
            var createdKey = createdAtActionResult.Value as Key;
            Assert.IsNotNull(createdKey);
            Assert.AreEqual(3, _context.Key.Count());
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(5)]
        public void DeleteKeyTest()
        {
            // Arrange
            var testKey = new Key { idKey = 1 /*, autres attributs du Key ici */ };
            _context.Key.Add(testKey);
            _context.SaveChanges();

            // Act
            var result = _controller.DeleteKey(testKey.idKey);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NoContentResult));
            Assert.IsNull(_context.Key.Find(testKey.idKey)); // La clé devrait avoir été supprimée
        }
    }
}
