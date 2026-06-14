# 🚀 Node API Boilerplate

> A simple, clean, and production-minded starting point for building REST APIs with **Node.js** and **Express 5**.

<p>
  <img alt="CI" src="https://github.com/douglasalfaro/node-api-boilerplate/actions/workflows/ci.yml/badge.svg">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white">
  <img alt="Express" src="https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white">
  <img alt="Tests" src="https://img.shields.io/badge/tests-Jest%20%2B%20Supertest-C21325?logo=jest&logoColor=white">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  <img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</p>

A minimal yet production-minded Express boilerplate you can clone and build on in minutes — with sensible defaults already wired up: security headers, CORS, JSON parsing, request logging, a health-check endpoint, modular routing, centralized error handling, tests, linting, and CI. Perfect for quick projects, prototypes, interview exercises, or as the seed of a larger service.

---

## ✨ Features

- **Express 5** — modern, fast HTTP framework.
- **Security defaults** — [Helmet](https://helmetjs.github.io/) security headers and configurable [CORS](https://github.com/expressjs/cors).
- **Request logging** — [morgan](https://github.com/expressjs/morgan) (disabled automatically during tests).
- **Health check** — `GET /health` returns status and uptime, ready for load balancers and uptime monitors.
- **Centralized error handling** — a 404 handler and a single error middleware return consistent JSON.
- **Environment config** — `.env` support via `dotenv`, with a documented `.env.example`.
- **Tested** — [Jest](https://jestjs.io/) + [Supertest](https://github.com/ladjs/supertest) cover the endpoints, with a testable `app` / `server` split.
- **Linted & formatted** — ESLint + Prettier configs included.
- **CI** — GitHub Actions runs lint, format check, and tests on Node 18 & 20.
- **Dockerized** — multi-stage-friendly `Dockerfile` with a container `HEALTHCHECK`.

---

## 🛠 Tech Stack

| Area            | Tools                              |
| --------------- | ---------------------------------- |
| **Runtime**     | Node.js 18+                        |
| **Framework**   | Express 5                          |
| **Middleware**  | helmet, cors, morgan, express.json |
| **Config**      | dotenv                             |
| **Testing**     | Jest, Supertest                    |
| **Quality**     | ESLint, Prettier                   |
| **CI / Deploy** | GitHub Actions, Docker             |

---

## 📂 Project Structure

```
.
├── app.js                  # Express app: middleware, routes, error handling (exported for tests)
├── server.js               # Entry point: loads env and starts the HTTP server
├── routes/
│   └── hello.js            # Example route module (GET /api/hello)
├── tests/
│   └── api.test.js         # Jest + Supertest endpoint tests
├── .github/workflows/ci.yml# Lint, format check, and tests on push/PR
├── Dockerfile              # Container image
├── .env.example            # Environment variable template
├── eslint.config.js        # ESLint flat config
├── .prettierrc.json        # Prettier config
└── package.json
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js 18+** and npm

### Installation

```bash
git clone https://github.com/douglasalfaro/node-api-boilerplate.git
cd node-api-boilerplate
npm install
```

### Configuration

```bash
cp .env.example .env   # optional — defaults work out of the box
```

| Variable | Default | Description                 |
| -------- | ------- | --------------------------- |
| `PORT`   | `3000`  | Port the server listens on. |

### Run

```bash
npm run dev    # auto-restarts on file changes (node --watch)
npm start      # production start
```

The server starts at `http://localhost:3000`.

---

## 📜 npm Scripts

| Script                  | Description                         |
| ----------------------- | ----------------------------------- |
| `npm start`             | Start the server.                   |
| `npm run dev`           | Start with auto-restart on changes. |
| `npm test`              | Run the Jest test suite.            |
| `npm run test:watch`    | Run tests in watch mode.            |
| `npm run test:coverage` | Run tests with a coverage report.   |
| `npm run lint`          | Lint with ESLint.                   |
| `npm run lint:fix`      | Auto-fix lint issues.               |
| `npm run format`        | Format the codebase with Prettier.  |
| `npm run format:check`  | Check formatting without writing.   |

---

## 📡 API Reference

| Method | Endpoint     | Description               | Example response                         |
| ------ | ------------ | ------------------------- | ---------------------------------------- |
| `GET`  | `/health`    | Service health and uptime | `{ "status": "ok", "uptime": 12.34 }`    |
| `GET`  | `/api/hello` | Example greeting route    | `{ "message": "Hello from Douglas 🚀" }` |

```bash
curl http://localhost:3000/api/hello
# { "message": "Hello from Douglas 🚀" }

curl http://localhost:3000/health
# { "status": "ok", "uptime": 12.34 }
```

Unknown routes return `404 { "error": "Not Found" }`; unhandled errors return `500 { "error": "Internal Server Error" }`.

---

## 🧪 Testing

```bash
npm test              # run once
npm run test:coverage # with coverage
```

Tests use Supertest against the exported Express `app` (no network port needed). See `tests/api.test.js`.

---

## 🐳 Docker

```bash
docker build -t node-api-boilerplate .
docker run -p 3000:3000 node-api-boilerplate
```

The image runs as `NODE_ENV=production` and includes a `HEALTHCHECK` that polls `/health`.

---

## ➕ Adding a Route

1. Create a module in `routes/`, e.g. `routes/users.js`:

   ```js
   const express = require('express');
   const router = express.Router();

   router.get('/users', (req, res) => {
     res.json([{ id: 1, name: 'Ada' }]);
   });

   module.exports = router;
   ```

2. Mount it in `app.js`:

   ```js
   app.use('/api', require('./routes/users'));
   ```

---

## 🔭 Future Improvements

- Add input validation (e.g. `zod` or `express-validator`).
- Add a persistence layer (database) and example CRUD routes.
- Add authentication (JWT) and rate limiting.
- Add OpenAPI/Swagger documentation.

---

## 👤 About the Developer

**Douglas Alfaro** is a full-stack developer with experience building practical business
solutions using modern web technologies, automation, APIs, and cloud-based tools. His work
focuses on creating useful, scalable applications for real-world business problems.

- GitHub: [@douglasalfaro](https://github.com/douglasalfaro)

---

## 📄 License

Released under the [MIT License](LICENSE).
