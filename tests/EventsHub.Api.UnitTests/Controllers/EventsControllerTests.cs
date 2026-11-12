using Domain;
using EventsHub.API.Controllers;
using EventsHub.Application.Core;
using EventsHub.Application.Core.Mapping;
using EventsHub.Application.Events.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

namespace EventsHub.UnitTests.Controllers;

[TestFixture]
public class EventsControllerTests
{
    private ServiceProvider _serviceProvider = null!;
    private EventsController _eventsController = null!;

    private readonly List<string> _ownedEventIds = [];

    private static AppDbContext Db => GlobalTestSetup.AppDbContext;

    [SetUp]
    public void Setup()
    {
        var services = new ServiceCollection();
        services.AddMediatR(opt => opt.RegisterServicesFromAssemblyContaining<GetEventList.Handler>());
        services.AddSingleton(GlobalTestSetup.AppDbContext);
        services.AddSingleton<IMapper>(new Mapper(new MappingProfiles()));
        services.AddLogging();
        _serviceProvider = services.BuildServiceProvider();

        _eventsController = new EventsController
        {
            ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext { RequestServices = _serviceProvider }
            }
        };
    }

    [TearDown]
    public async Task TearDownAsync()
    {
        foreach (var id in _ownedEventIds)
        {
            var leftover = await Db.Events.FindAsync(id);
            if (leftover is not null)
            {
                Db.Events.Remove(leftover);
                await Db.SaveChangesAsync();
            }
        }
        _ownedEventIds.Clear();
        await _serviceProvider.DisposeAsync();
    }

    [Test]
    public async Task GetEventsAsync_WhenEventsExists_ReturnsAllEventsAsync()
    {
        // Arrange
        var expectedCount = await Db.Events.CountAsync();
        // Act
        var result = await _eventsController.GetEventsAsync();
        // Assert
        Assert.That(result.Value, Is.Not.Null);
        Assert.That(result.Value, Has.Count.EqualTo(expectedCount));
    }

    [Test]
    public async Task GetEventDetailAsync_WhenEventExists_ReturnsMatchingEventAsync()
    {
        // Arrange
        var existing = await Db.Events.FirstAsync();
        // Act
        var result = await _eventsController.GetEventByIdAsync(existing.Id);
        // Assert
        Assert.That(result.Value, Is.Not.Null);
        var detail = result.Value;
        Assert.Multiple(() =>
        {
            Assert.That(detail.Id, Is.EqualTo(existing.Id));
            Assert.That(detail.Title, Is.EqualTo(existing.Title));
        });
    }

    [Test]
    public void GetEventDetailAsync_WhenIdDoesntExist_ThrowsActivityNotFoundAsync()
    {
        // Arrange
        var nonExistentId = Guid.NewGuid().ToString();
        // Act & Assert
        var ex = Assert.ThrowsAsync<Exception>(async () => await _eventsController.GetEventByIdAsync(nonExistentId));
        Assert.That(ex!.Message, Is.EqualTo("Activity not found"));
    }

    [Test]
    public async Task CreateEventAsync_WhenEventIsValid_ReturnsIdAndPersistsEventAsync()
    {
        // Arrange
        var newEvent = NewEvent("Controller create test");
        _ownedEventIds.Add(newEvent.Id);
        // Act
        var result = await _eventsController.CreateEventAsync(newEvent);
        // Assert
        Assert.That(result.Value, Is.EqualTo(newEvent.Id));
        var stored = await Db.Events.AsNoTracking().FirstOrDefaultAsync(e => e.Id == newEvent.Id);
        Assert.That(stored, Is.Not.Null);
    }

    private static Event NewEvent(string? id = null, string title = "Test event") => new()
    {
        Id = id ?? Guid.NewGuid().ToString(),
        Title = title,
        Description = "Test description",
        Category = "music",
        City = "Yucatan",
        Venue = "Test venue",
        Date = DateTime.UtcNow.AddDays(7)
    };
}
