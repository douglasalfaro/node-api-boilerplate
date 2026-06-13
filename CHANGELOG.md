# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `GET /health` endpoint returning status and uptime.
- 404 handler and a centralized error-handling middleware (consistent JSON errors).
- `.env.example`, MIT `LICENSE`, `CONTRIBUTING.md`, and this `CHANGELOG.md`.
- `start` and `dev` (`node --watch`) npm scripts; `engines.node >= 18`.
- Polished README with setup, configuration, API reference, and a route-adding guide.

### Changed
- `package.json`: corrected `main` to `server.js`, set author, switched license to MIT,
  and added keywords.
- Expanded `.gitignore` (env files, logs, coverage, OS/editor noise).

## [1.0.0]

### Added
- Initial Express boilerplate: `server.js` with JSON parsing and a modular `routes/hello.js`
  example route (`GET /api/hello`).
