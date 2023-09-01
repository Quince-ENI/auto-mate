using Microsoft.EntityFrameworkCore;
using QA_back.Models;
using System.Linq;
using Xunit;

namespace QA_back.Tests  // Assurez-vous d'avoir un espace de noms approprié pour vos tests
{
    public class DataBaseTests
    {
        [Fact]
        public void AddTravel_ShouldIncreaseCount()
        {
            // Configuration du contexte avec la base de données en mémoire
            var options = new DbContextOptionsBuilder<Context>()
                .UseInMemoryDatabase(databaseName: "AddTravelTestDatabase") // Choisissez un nom unique pour chaque ensemble de tests
                .Options;

            using var context = new Context(options);

            // Création d'un nouveau Travel pour le test
            var travel = new Travel
            {
                departure_city = "Paris",
                arrival_city = "Lyon",
                departure_time = DateTime.Now.AddHours(2),  // Disons que le départ est prévu dans 2 heures à partir de maintenant
                arrival_time = DateTime.Now.AddHours(4),    // Et l'arrivée 4 heures à partir de maintenant
                remaining_seats = 3,
                carpooling = 1,  // Supposons que c'est ouvert au covoiturage
                user = 123,      // Supposons qu'il s'agit de l'ID d'un utilisateur fictif. Assurez-vous que cet ID est valide ou n'est pas nécessaire pour ce test.
                car = 456        // De même, supposez que c'est l'ID d'une voiture fictive. Assurez-vous que cet ID est valide ou n'est pas nécessaire pour ce test.
            };


            context.Travel.Add(travel);
            context.SaveChanges();

            var travelCount = context.Travel.Count();
            Assert.Equal(1, travelCount);
        }

        // Vous pouvez ajouter d'autres méthodes de test ici
    }
}
