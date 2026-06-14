# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Testing:** Jest + Supertest suite covering `/health`, `/api/hello`, and 404 behavior.
- **Security & logging middleware:** Helmet (security headers), CORS, and morgan request logging.
- **Configuration:** `dotenv` support and a documented `.env.example`.
- **Tooling:** ESLint (flat config) + Prettier, with `lint`, `lint:fix`, `format`, and
  `format:check` scripts.
- **CI:** GitHub Actions workflow running lint, format check, and tests on Node 18 & 20.
- **Docker:** `Dockerfile` (+ `.dockerignore`) with a container `HEALTHCHECK` against `/health`.
- `GET /health` endpoint, a 404 handler, and a centralized error-handling middleware.
- MIT `LICENSE`, `CONTRIBUTING.md`, and this `CHANGELOG.md`.

### Changed

- **Architecture:** split the Express `app` (`app.js`) from the server bootstrap (`server.js`)
  so the app can be imported and tested without binding a port.
- `package.json`: corrected `main` to `server.js`, added scripts, set author, switched license
  to MIT, added keywords and `engines.node >= 18`.
- Rewrote the README (it was unfinished) with setup, scripts, API reference, testing, Docker,
  and a route-adding guide.
- Expanded `.gitignore` (env files, logs, coverage, OS/editor noise).

## [1.0.0]

### Added

- Initial Express boilerplate: `server.js` with JSON parsing and a modular `routes/hello.js`
  example route (`GET /api/hello`).
