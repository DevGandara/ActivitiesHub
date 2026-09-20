# Repository Guidelines

## Project Structure & Module Organization

EventsHub combines a .NET 10 backend with a React/TypeScript/Vite frontend.
- `src/EventsHub.API`: HTTP controllers and application startup.
- `src/EventsHub.Domain`: domain entities.
- `src/EventsHub.Application`: application-layer project, currently a placeholder.
- `src/EventsHub.Persistence`: EF Core SQLite context, migrations, and seed data.
- `src/EventsHub.OpenApi`: OpenAPI documentation host.
- `web/src`: frontend components and bundled assets; `web/public`: static files.
- `tests/EventsHub.UnitTests`: NUnit tests; `tests/EventsHub.IntegrationTest`: Bruno HTTP collections.
- `docs`: setup notes; verify older instructions against current configuration.

## Build, Test, and Development Commands

Run backend commands from the repository root:

```sh
dotnet restore
dotnet build EventsHub.slnx
dotnet test EventsHub.slnx
dotnet run --project src/EventsHub.API
```

These restore dependencies, compile the solution, execute tests, and start the API respectively.

Run frontend commands from `web/`:

```sh
npm ci
npm run dev
npm run build
npm run lint
```

These install locked dependencies, start Vite, type-check and build production assets, and run ESLint. Use `npm run preview` to inspect the production build locally.

## Coding Style & Naming Conventions

Match surrounding code and avoid unrelated formatting changes. Prefer four-space C# indentation, PascalCase types/methods/properties, `_camelCase` private fields, and `Async` suffixes for asynchronous methods. Frontend code generally uses two-space indentation and PascalCase component names. ESLint checks TypeScript, React Hooks, and React Refresh conventions; no Prettier configuration is present.

## Testing Guidelines

Use NUnit with Arrange/Act/Assert and names such as `Method_WhenCondition_ExpectedResult`. Tests migrate and seed a local SQLite `eventshub.db`; do not point them at valuable data. Collect coverage with `dotnet test --collect:"XPlat Code Coverage"`; no numeric coverage threshold is configured. Run Bruno collections against the local API, checking fixture IDs first. The frontend has no test script: run build and lint, and manually verify changed UI behavior.

## Commit & Pull Request Guidelines

Use Conventional Commits, following recent history: `feat(parcial02): add activity type` or `fix(parcial02): fix optional id warning`. Never add AI attribution or `Co-Authored-By` trailers. Keep PRs focused; describe changes, link relevant issues, report verification, and include screenshots for UI changes.

## Security & Configuration

Keep secrets, `.env` files, and SQLite databases out of commits. API startup applies migrations and seeds data. Keep frontend URLs and API CORS settings aligned when changing local ports.
