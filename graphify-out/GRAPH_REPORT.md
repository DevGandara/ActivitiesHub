# Graph Report - EventsHub  (2026-09-29)

## Corpus Check
- Corpus is ~49,262 words - fits in a single context window. You may not need a graph.

## Summary
- 555 nodes · 791 edges · 34 communities (26 shown, 8 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.89)
- Token cost: unavailable (session agent usage was not exposed; cost.json uses zero placeholders).

## Community Hubs (Navigation)
- Generated API Client
- Backend Namespaces and Dependencies
- Event Commands and Queries
- Frontend Build Tooling
- Architecture and Data Patterns
- Graphify Extraction and Navigation
- Solution Projects and Packages
- Event Endpoints and Tests
- Browser TypeScript Configuration
- Historical Architecture and Contracts
- Frontend Development Dependencies
- Generated Client Data Models
- Node TypeScript Configuration
- Software Testing Principles
- Bruno HTTP Integration Tests
- Database Seeding and Fixtures
- API Launch Configuration
- OpenAPI Launch Configuration
- Frontend Runtime Dependencies
- Weather Domain Model
- Git Collaboration Workflow
- Social and Documentation Icons
- Database Model Snapshot
- React Template Documentation
- Repository Testing Guidelines
- Architecture Documentation Workflow
- TypeScript Project References
- HTML Application Entry
- Lightning Favicon
- Layered Hero Illustration
- React Branding
- Vite Branding
- Frontend Activity Type
- Project Overview

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `EventsHub architecture snapshot September 2026` - 14 edges
7. `AppDbContext` - 13 edges
8. `Event` - 13 edges
9. `ApiException` - 13 edges
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
- `EventsControllerTests` --references--> `EventsController`  [EXTRACTED]
  tests/EventsHub.UnitTests/Controllers/EventsControllerTests.cs → src/EventsHub.API/Controllers/EventsController.cs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Documented event query flow** — docs_arquitectura_react_frontend, docs_arquitectura_axios_json_requests, docs_arquitectura_eventscontroller, docs_arquitectura_appdbcontext, docs_arquitectura_sqlite [EXTRACTED 1.00]

## Communities (34 total, 8 thin omitted)

### Community 0 - "Generated API Client"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "Backend Namespaces and Dependencies"
Cohesion: 0.06
Nodes (36): automapper, ControllerBase, EventsHub.API.Controllers, EventsHub.Persistence.Migrations, Persistence, EventsHub.Application.Events.Queries, Domain, EventsHub.Application.Events.Commands (+28 more)

### Community 2 - "Event Commands and Queries"
Cohesion: 0.05
Nodes (52): Command, DbContext, DbContextOptions, DbSet, IMapper, IRequest, IRequestHandler, List (+44 more)

### Community 3 - "Frontend Build Tooling"
Cohesion: 0.07
Nodes (36): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks (+28 more)

### Community 4 - "Architecture and Data Patterns"
Cohesion: 0.09
Nodes (38): Incremental graph updates, Replace on reextract, Semantic cache manifest, Application use cases, Architecture tests, Clean Architecture, Clean Architecture fundamentals, Composition root (+30 more)

### Community 5 - "Graphify Extraction and Navigation"
Cohesion: 0.06
Nodes (35): Debounced code watcher, URL ingestion, URL ingestion and folder watching, Graph exports and benchmark, GraphRAG JSON, Interactive HTML graph, MCP graph server, Neo4j Cypher export (+27 more)

### Community 6 - "Solution Projects and Packages"
Cohesion: 0.08
Nodes (26): AutoMapper (13.0.1), coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0) (+18 more)

### Community 7 - "Event Endpoints and Tests"
Cohesion: 0.17
Nodes (14): ActionResult, HttpDelete, HttpPost, HttpPut, IReadOnlyList, NotFoundObjectResult, ProducesResponseType, SetUp (+6 more)

### Community 8 - "Browser TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "Historical Architecture and Contracts"
Cohesion: 0.18
Nodes (18): AppDbContext, Axios JSON requests, Coordinate contract mismatch, Event entity, EventsController, EventsHub architecture snapshot September 2026, Generated CSharp client, Historical application placeholder (+10 more)

### Community 10 - "Frontend Development Dependencies"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 11 - "Generated Client Data Models"
Cohesion: 0.12
Nodes (17): DateTimeOffset, Event, Category, City, Date, Description, Id, IsCancelled (+9 more)

### Community 12 - "Node TypeScript Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 13 - "Software Testing Principles"
Cohesion: 0.29
Nodes (11): Real provider testing, Arrange Act Assert, Behavior focused assertions, End to end testing, FIRST principles, Integration testing, Software testing fundamentals, Test doubles (+3 more)

### Community 14 - "Bruno HTTP Integration Tests"
Cohesion: 0.29
Nodes (11): Local baseUrl: https://localhost:5001/api/v1, Create event: POST /events, asserts HTTP 200, Edit event: PUT /events, asserts HTTP 200, Event fixture 02ad363b-a2ba-4102-b98c-7a80745be581, Get existing event: GET /events/:eventId, asserts HTTP 200, Get missing event: GET /events/non-existing-eventId, asserts HTTP 404, List events: GET /events, asserts HTTP 200 and array, Events request folder (+3 more)

### Community 15 - "Database Seeding and Fixtures"
Cohesion: 0.22
Nodes (7): OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, Task, GlobalTestSetup, AppDbContext

### Community 16 - "API Launch Configuration"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 17 - "OpenAPI Launch Configuration"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 18 - "Frontend Runtime Dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react (+1 more)

### Community 19 - "Weather Domain Model"
Cohesion: 0.25
Nodes (7): EventsHub.API, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 20 - "Git Collaboration Workflow"
Cohesion: 0.43
Nodes (8): Cherry pick, Git branches, Git commits, Git in practice, Merge, Pull requests, Squash, Stash

### Community 21 - "Social and Documentation Icons"
Cohesion: 0.29
Nodes (7): Bluesky butterfly logo, Discord controller mascot logo, Purple code documentation icon, GitHub Octocat logo, Purple person and star social icon, Reusable social and documentation SVG icon sprite, X social network logo

### Community 22 - "Database Model Snapshot"
Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 23 - "React Template Documentation"
Cohesion: 0.40
Nodes (5): React + TypeScript + Vite template, React Compiler, Type-aware ESLint rules, @vitejs/plugin-react with Oxc, @vitejs/plugin-react-swc with SWC

### Community 24 - "Repository Testing Guidelines"
Cohesion: 0.50
Nodes (4): Bruno HTTP collections, Frontend build and lint, NUnit SQLite tests, Repository guidelines

### Community 25 - "Architecture Documentation Workflow"
Cohesion: 0.67
Nodes (3): Approved documentation outline, Architecture documentation workflow, Discovery before documentation

## Knowledge Gaps
- **215 isolated node(s):** `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)`, `Microsoft.EntityFrameworkCore.Design (10.0.11)`, `Microsoft.NET.Sdk.Web` (+210 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 268 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event Commands and Queries` to `Event Endpoints and Tests`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `Event Commands and Queries` to `Backend Namespaces and Dependencies`, `Database Seeding and Fixtures`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `Graphify knowledge graph workflow` connect `Graphify Extraction and Navigation` to `Architecture and Data Patterns`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` to the rest of the system?**
  _215 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Generated API Client` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `Backend Namespaces and Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.056261343012704176 - nodes in this community are weakly interconnected._
- **Should `Event Commands and Queries` be split into smaller, more focused modules?**
  _Cohesion score 0.05021173623714459 - nodes in this community are weakly interconnected._

## Token accounting note

Semantic extraction used session agents. Their actual token usage was not exposed by the agent tools; recorded zeros are placeholders, not a measured zero cost.

## Graph Health Warning

The raw extraction has 33 dangling-endpoint edges and 27 same-endpoint relations collapsed by the simple graph. The graph remains usable, but some references or distinct occurrences may be incomplete. See graph-health.json.
