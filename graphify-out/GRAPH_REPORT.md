# Graph Report - EventsHub  (2026-10-19)

## Corpus Check
- 79 files · ~99,201 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 10, .nswag 1, .css 1)

## Summary
- 638 nodes · 886 edges · 41 communities (31 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8fdae768`
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
- Part 2: .NET only (Husky.Net)
- https
- EventsHub.OpenApi
- @mui/material
- WeatherForecast
- Git in practice
- 20260917130757_InitialCreate.Designer.cs
- web_src_index
- React + TypeScript + Vite template
- Repository guidelines
- Architecture documentation workflow
- tsconfig.json
- Events Hub HTML entry point
- Part 1: .NET + npm in the same repo (e.g. EventsHub)
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- dependencies
- App.tsx
- index.d.ts
- ActivitysHub ICI 2026
- openspec-explore/SKILL.md
- scripts

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `Part 1: .NET + npm in the same repo (e.g. EventsHub)` - 14 edges
7. `Part 2: .NET only (Husky.Net)` - 14 edges
8. `Part 3: npm only, `package.json` in the repo root (Husky v9)` - 14 edges
9. `EventsHub architecture snapshot September 2026` - 14 edges
10. `Part 4: npm only, `package.json` in a subfolder (Husky v9)` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Replace on reextract` --semantically_similar_to--> `Read model projection`  [INFERRED] [semantically similar]
  .codex/skills/graphify/references/update.md → docs/fundamentals/CqrsFundamentals.md
- `Graphify` --conceptually_related_to--> `Graphify knowledge graph workflow`  [INFERRED]
  docs/guides/install-graphify-openspec.md → .codex/skills/graphify/SKILL.md
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `Repository and Unit of Work` --semantically_similar_to--> `DbContext`  [INFERRED] [semantically similar]
  docs/fundamentals/CleanArchitectureFundamentals.md → docs/fundamentals/DbContextFundamentals.md
- `Optimistic concurrency` --semantically_similar_to--> `Optimistic concurrency tokens`  [INFERRED] [semantically similar]
  docs/fundamentals/CqrsFundamentals.md → docs/fundamentals/DbContextFundamentals.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Documented event query flow** — docs_arquitectura_react_frontend, docs_arquitectura_axios_json_requests, docs_arquitectura_eventscontroller, docs_arquitectura_appdbcontext, docs_arquitectura_sqlite [EXTRACTED 1.00]

## Communities (41 total, 10 thin omitted)

### Community 0 - "EventsRpcClient"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "Persistence"
Cohesion: 0.05
Nodes (38): automapper, ControllerBase, EventsHub.API.Controllers, Persistence, EventsHub.Application.Events.Queries, Domain, EventsHub.Application.Events.Commands, EventsHub.UnitTests (+30 more)

### Community 2 - "Event"
Cohesion: 0.06
Nodes (46): Command, DbContext, DbContextOptions, DbSet, IMapper, IRequest, IRequestHandler, List (+38 more)

### Community 3 - "package.json"
Cohesion: 0.10
Nodes (23): @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+15 more)

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

### Community 15 - "Part 2: .NET only (Husky.Net)"
Cohesion: 0.06
Nodes (31): How to use this guide, Installing Husky in a Project: .NET and npm, Optional: add Prettier (code formatting), Part 2: .NET only (Husky.Net), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly), Skipping hooks (use sparingly), Step 10: Commit the Husky files (+23 more)

### Community 16 - "https"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 17 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 18 - "@mui/material"
Cohesion: 0.21
Nodes (11): @mui/material, ActivitiesDashboard(), Props, ActivityCard(), Props, ActivityList(), Props, ActivityDetail() (+3 more)

### Community 19 - "WeatherForecast"
Cohesion: 0.25
Nodes (7): EventsHub.API, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 20 - "Git in practice"
Cohesion: 0.43
Nodes (8): Cherry pick, Git branches, Git commits, Git in practice, Merge, Pull requests, Squash, Stash

### Community 21 - "20260917130757_InitialCreate.Designer.cs"
Cohesion: 0.12
Nodes (15): EventsHub.Persistence.Migrations, microsoft_entityframeworkcore_infrastructure, microsoft_entityframeworkcore_migrations, microsoft_entityframeworkcore_storage_valueconversion, Migration, MigrationBuilder, ModelSnapshot, DateTime (+7 more)

### Community 23 - "React + TypeScript + Vite template"
Cohesion: 0.40
Nodes (5): React + TypeScript + Vite template, React Compiler, Type-aware ESLint rules, @vitejs/plugin-react with Oxc, @vitejs/plugin-react-swc with SWC

### Community 24 - "Repository guidelines"
Cohesion: 0.50
Nodes (4): Bruno HTTP collections, Frontend build and lint, NUnit SQLite tests, Repository guidelines

### Community 25 - "Architecture documentation workflow"
Cohesion: 0.67
Nodes (3): Approved documentation outline, Architecture documentation workflow, Discovery before documentation

### Community 28 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky.Net as a local tool, Step 3: Install the Git hooks (+7 more)

### Community 29 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

### Community 30 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react (+1 more)

### Community 31 - "App.tsx"
Cohesion: 0.21
Nodes (9): axios, @fontsource/roboto, @mui/icons-material, react, react-dom, App(), web_src_app_layout_index, NavBar() (+1 more)

### Community 34 - "openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 40 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **269 isolated node(s):** `How to use this guide`, `Where to run the commands (read this once)`, `Step 1: Check prerequisites`, `Step 2: Install Husky.Net as a local tool`, `Step 3: Install the Git hooks` (+264 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 328 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event` to `Persistence`, `EventsController`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `Event` to `Persistence`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `Graphify knowledge graph workflow` connect `Graphify knowledge graph workflow` to `Clean Architecture fundamentals`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `How to use this guide`, `Where to run the commands (read this once)`, `Step 1: Check prerequisites` to the rest of the system?**
  _269 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `EventsRpcClient` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.0514216575922565 - nodes in this community are weakly interconnected._
- **Should `Event` be split into smaller, more focused modules?**
  _Cohesion score 0.05647058823529412 - nodes in this community are weakly interconnected._