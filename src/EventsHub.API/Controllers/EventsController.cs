using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.API.Controllers
{
    public class EventsController(AppDbContext context) : EventsHubBaseController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Event>>> GetEventsAsync()
        {
            return await context.Events.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEventByIdAsync(string id)
        {
            var @event = await context.Events.FindAsync(id);

            if (@event == null)
            {
                return NotFound("The events was not found.");
            }

            return @event;
        }
    }
}