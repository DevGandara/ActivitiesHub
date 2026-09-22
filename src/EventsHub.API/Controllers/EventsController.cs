using Domain;
using Microsoft.AspNetCore.Mvc;
using EventsHub.Application.Events.Queries;

namespace EventsHub.API.Controllers
{
    public class EventsController : EventsHubBaseController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Event>>> GetEventsAsync()
        {
            return await Mediator.Send(new GetEventList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEventByIdAsync(string id)
        {
            return await Mediator.Send(new GetEventDetails.Query{Id = id});
        }
    }
}