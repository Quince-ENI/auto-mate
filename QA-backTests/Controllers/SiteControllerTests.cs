using Microsoft.VisualStudio.TestTools.UnitTesting;
using QA_back.Controllers;
using QA_back.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace QA_back.Controllers.Tests
{
    [TestClass()]
    public class SiteControllerTests
    {
        private Context _context;
        private SiteController _controller;

        [TestInitialize]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<Context>()
                .UseInMemoryDatabase(databaseName: "InMemoryDbForTesting")
                .Options;

            _context = new Context(options);
            _context.Database.EnsureDeleted();
            _context.Database.EnsureCreated();

            var testSite1 = new Site
            {
                idSite = 2, 
                address = "87 Boulevard Casse Grain", 
                city = "Bourg-en-Bresse", 
                departement = 01, 
                name = "Agence Bourg-en-Bresse", 
                postal_code = 01000
            };

            var testSite2 = new Site
            {
                idSite = 3,
                address = "9 rue de la patinoire",
                city = "Poitiers",
                departement = 86,
                name = "Agence Poitiers",
                postal_code = 86000
            };

            _context.Site.AddRange(testSite1, testSite2);
            _context.SaveChanges();

            _controller = new SiteController(_context);
        }

        [TestCleanup]
        public void Cleanup()
        {
            _context.Database.EnsureDeleted();
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(1)]
        public void GetSitesTest()
        {
            // Arrange
            var testSite = new Site { /* Initialiser les attributs de votre Site ici */ };
            _context.Site.Add(testSite);
            _context.SaveChanges();

            // Act
            var result = _controller.GetSites();

            // Assert
            var countBeforeCall = _context.Site.Count();
            Assert.AreEqual(3, countBeforeCall);

            Assert.AreEqual(3, result.Value.Count());
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(2)]
        public void GetSiteTest()
        {
            // Arrange
            var testSite = new Site { idSite = 1 /*, autres attributs du Site ici */ };
            _context.Site.Add(testSite);
            _context.SaveChanges();

            // Act
            var result = _controller.GetSite(testSite.idSite);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(testSite, result.Value);
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(3)]
        public void UpdateSiteTest()
        {
            // Arrange
            var testSite = new Site { idSite = 1 /*, autres attributs du Site ici */ };
            _context.Site.Add(testSite);
            _context.SaveChanges();

            testSite.city = "New York";  // Par exemple, mettons à jour un attribut

            // Act
            var result = _controller.UpdateSite(testSite.idSite, testSite);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NoContentResult));
            var updatedSite = _context.Site.Find(testSite.idSite);
            Assert.AreEqual("New York", updatedSite.city); // Vérifiez que l'attribut a été mis à jour
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(4)]
        public void CreateSiteTest()
        {
            // Arrange
            var testSite = new Site { /* Attributs du Site ici */ };

            // Act
            var result = _controller.CreateSite(testSite);

            // Assert
            var createdAtActionResult = result.Result as CreatedAtActionResult;
            Assert.IsNotNull(createdAtActionResult);
            var createdSite = createdAtActionResult.Value as Site;
            Assert.IsNotNull(createdSite);
            Assert.AreEqual(3, _context.Site.Count());
        }

        [Timeout(2000)]
        [TestMethod()]
        [Priority(5)]
        public void DeleteSiteTest()
        {
            // Arrange
            var testSite = new Site { idSite = 1 /*, autres attributs du Site ici */ };
            _context.Site.Add(testSite);
            _context.SaveChanges();

            // Act
            var result = _controller.DeleteSite(testSite.idSite);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NoContentResult));
            Assert.IsNull(_context.Site.Find(testSite.idSite)); // Le site devrait avoir été supprimé
        }
    }
}
