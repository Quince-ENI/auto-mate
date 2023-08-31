using Moq;
using Xunit;
using Microsoft.EntityFrameworkCore;
using QA_back.Models;
using QA_back.Controllers;
using QA_back;

public class TravelControllerTests
{
    private readonly TravelController _controller;
    private readonly Mock<Context> _mockContext;

    public TravelControllerTests()
    {
        var mockSet = new Mock<DbSet<Travel>>();
        var mockContext = new Mock<Context>();
        mockContext.Setup(c => c.Travel).Returns(mockSet.Object);

        _controller = new TravelController(mockContext.Object);
    }

    [Fact]
    public void GetTravels_ReturnsAllTravels()
    {
        var result = _controller.GetTravels();

        Assert.IsType<List<Travel>>(result.Value);
    }

    // Ajoutez d'autres tests pour d'autres méthodes et scénarios.
}
