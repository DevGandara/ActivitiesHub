using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using EventsHub.Application.Events.Queries;

namespace EventsHub.API.Controllers
{
    public class EventsController(IMediator mediator) : EventsHubBaseController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Event>>> GetEventsAsync()
        {
            return await mediator.Send(new GetEventList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEventByIdAsync(string id)
        {
            return await mediator.Send(new GetEventDetails.Query{Id = id});
        }
    }
}