# Graph Report - EventsHub  (2026-10-01)

## Corpus Check
- 72 files · ~63,168 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 9, .nswag 1, .css 1)

## Summary
- 572 nodes · 800 edges · 40 communities (27 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ffd9f8e3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EventsRpcClient
- Persistence
- Event
- package.json
- Clean Architecture fundamentals
- Graphify knowledge graph workflow
- EventsHub.UnitTests.csproj
- EventsController
- compilerOptions
- EventsHub architecture snapshot September 2026
- devDependencies
- Event
- compilerOptions
- DbContext fundamentals
- Local baseUrl: https://localhost:5001/api/v1
- GlobalTestSetup
- https
- EventsHub.OpenApi
- dependencies
- WeatherForecast
- Git in practice
- Reusable social and documentation SVG icon sprite
- EventsHubBaseController
- React + TypeScript + Vite template
- Repository guidelines
- Architecture documentation workflow
- tsconfig.json
- Events Hub HTML entry point
- Purple and blue lightning favicon
- Exploded stack hero illustration
- React cyan atom logo
- Vite
- index.d.ts
- ActivitysHub ICI 2026
- openspec-explore/SKILL.md

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `EventsHub architecture snapshot September 2026` - 14 edges
7. `ApiException` - 13 edges
8. `Event` - 13 edges
9. `AppDbContext` - 13 edges
10. `Graphify knowledge graph workflow` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Replace on reextract` --semantically_similar_to--> `Read model projection`  [INFERRED] [semantically similar]
  .codex/skills/graphify/references/update.md → docs/fundamentals/CqrsFundamentals.md
- `Graphify` --conceptually_related_to--> `Graphify knowledge graph workflow`  [INFERRED]
  docs/guides/install-graphify-openspec.md → .codex/skills/graphify/SKILL.md
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `Incremental migration` --semantically_similar_to--> `CQRS`  [INFERRED] [semantically similar]
  docs/fundamentals/CleanArchitectureFundamentals.md → docs/fundamentals/CqrsFundamentals.md
- `Repository and Unit of Work` --semantically_similar_to--> `DbContext`  [INFERRED] [semantically similar]
  docs/fundamentals/CleanArchitectureFundamentals.md → docs/fundamentals/DbContextFundamentals.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Documented event query flow** — docs_arquitectura_react_frontend, docs_arquitectura_axios_json_requests, docs_arquitectura_eventscontroller, docs_arquitectura_appdbcontext, docs_arquitectura_sqlite [EXTRACTED 1.00]

## Communities (40 total, 13 thin omitted)

### Community 0 - "EventsRpcClient"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "Persistence"
Cohesion: 0.08
Nodes (26): automapper, EventsHub.Persistence.Migrations, Persistence, EventsHub.Application.Events.Queries, Domain, EventsHub.Application.Events.Commands, EventsHub.UnitTests, EventsHub.Application.Core (+18 more)

### Community 2 - "Event"
Cohesion: 0.05
Nodes (52): Command, DbContext, DbContextOptions, DbSet, IMapper, IRequest, IRequestHandler, List (+44 more)

### Community 3 - "package.json"
Cohesion: 0.06
Nodes (35): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks (+27 more)

### Community 4 - "Clean Architecture fundamentals"
Cohesion: 0.11
Nodes (29): Incremental graph updates, Replace on reextract, Semantic cache manifest, Application use cases, Architecture tests, Clean Architecture, Clean Architecture fundamentals, Composition root (+21 more)

### Community 5 - "Graphify knowledge graph workflow"
Cohesion: 0.06
Nodes (35): Debounced code watcher, URL ingestion, URL ingestion and folder watching, Graph exports and benchmark, GraphRAG JSON, Interactive HTML graph, MCP graph server, Neo4j Cypher export (+27 more)

### Community 6 - "EventsHub.UnitTests.csproj"
Cohesion: 0.08
Nodes (26): AutoMapper (13.0.1), coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0) (+18 more)

### Community 7 - "EventsController"
Cohesion: 0.17
Nodes (14): ActionResult, HttpDelete, HttpPost, HttpPut, IReadOnlyList, NotFoundObjectResult, ProducesResponseType, SetUp (+6 more)

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "EventsHub architecture snapshot September 2026"
Cohesion: 0.18
Nodes (18): AppDbContext, Axios JSON requests, Coordinate contract mismatch, Event entity, EventsController, EventsHub architecture snapshot September 2026, Generated CSharp client, Historical application placeholder (+10 more)

### Community 10 - "devDependencies"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 11 - "Event"
Cohesion: 0.12
Nodes (17): DateTimeOffset, Event, Category, City, Date, Description, Id, IsCancelled (+9 more)

### Community 12 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 13 - "DbContext fundamentals"
Cohesion: 0.17
Nodes (20): AsNoTracking, Change tracking, DbContext, DbContext fundamentals, DbContext pooling, DbSet, Optimistic concurrency tokens, Real provider testing (+12 more)

### Community 14 - "Local baseUrl: https://localhost:5001/api/v1"
Cohesion: 0.29
Nodes (11): Local baseUrl: https://localhost:5001/api/v1, Create event: POST /events, asserts HTTP 200, Edit event: PUT /events, asserts HTTP 200, Event fixture 02ad363b-a2ba-4102-b98c-7a80745be581, Get existing event: GET /events/:eventId, asserts HTTP 200, Get missing event: GET /events/non-existing-eventId, asserts HTTP 404, List events: GET /events, asserts HTTP 200 and array, Events request folder (+3 more)

### Community 15 - "GlobalTestSetup"
Cohesion: 0.22
Nodes (7): OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, Task, GlobalTestSetup, AppDbContext

### Community 16 - "https"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 17 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 18 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react (+1 more)

### Community 19 - "WeatherForecast"
Cohesion: 0.25
Nodes (7): EventsHub.API, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 20 - "Git in practice"
Cohesion: 0.43
Nodes (8): Cherry pick, Git branches, Git commits, Git in practice, Merge, Pull requests, Squash, Stash

### Community 21 - "Reusable social and documentation SVG icon sprite"
Cohesion: 0.29
Nodes (7): Bluesky butterfly logo, Discord controller mascot logo, Purple code documentation icon, GitHub Octocat logo, Purple person and star social icon, Reusable social and documentation SVG icon sprite, X social network logo

### Community 22 - "EventsHubBaseController"
Cohesion: 0.12
Nodes (14): ControllerBase, EventsHub.API.Controllers, EventsHub.UnitTests.Controllers, IMediator, microsoft_aspnetcore_mvc, newtonsoft_json_serialization, EventsHubBaseController, Mediator (+6 more)

### Community 23 - "React + TypeScript + Vite template"
Cohesion: 0.40
Nodes (5): React + TypeScript + Vite template, React Compiler, Type-aware ESLint rules, @vitejs/plugin-react with Oxc, @vitejs/plugin-react-swc with SWC

### Community 24 - "Repository guidelines"
Cohesion: 0.50
Nodes (4): Bruno HTTP collections, Frontend build and lint, NUnit SQLite tests, Repository guidelines

### Community 25 - "Architecture documentation workflow"
Cohesion: 0.67
Nodes (3): Approved documentation outline, Architecture documentation workflow, Discovery before documentation

### Community 34 - "openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

## Knowledge Gaps
- **225 isolated node(s):** `The Stance`, `Planning a Change`, `What You Might Do`, `Check for context`, `When no change exists` (+220 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 284 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event` to `EventsController`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `Event` to `Persistence`, `GlobalTestSetup`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Graphify knowledge graph workflow` connect `Graphify knowledge graph workflow` to `Clean Architecture fundamentals`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `The Stance`, `Planning a Change`, `What You Might Do` to the rest of the system?**
  _225 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EventsRpcClient` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.07716701902748414 - nodes in this community are weakly interconnected._
- **Should `Event` be split into smaller, more focused modules?**
  _Cohesion score 0.05021173623714459 - nodes in this community are weakly interconnected._