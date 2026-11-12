using Domain;
using EventsHub.Application.Core.Mapping;
namespace EventsHub.Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Event, Event>();
    }
}
