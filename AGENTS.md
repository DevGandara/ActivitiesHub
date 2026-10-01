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

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
