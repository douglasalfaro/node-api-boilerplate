# 🚀 Node API Boilerplate

> A simple, clean, and production-minded starting point for building REST APIs with **Node.js** and **Express 5**.

<p>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white">
  <img alt="Express" src="https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  <img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</p>

A minimal, well-structured Express boilerplate you can clone and build on in minutes — with sensible defaults already in place: JSON parsing, a health-check endpoint, modular routing, and centralized 404 / error handling. Perfect for quick projects, prototypes, interview exercises, or as the seed of a larger service.

---

## ✨ Features

- **Express 5** — modern, fast HTTP framework.
- **Modular routing** — routes live in `routes/` and mount cleanly in `server.js`.
- **Health check** — `GET /health` returns status and uptime, ready for load balancers and uptime monitors.
- **Centralized error handling** — a 404 handler and a single error middleware return consistent JSON.
- **Environment-based config** — `PORT` via environment variables, with a documented `.env.example`.
- **Zero lock-in** — tiny surface area, easy to extend with your own routes and middleware.

---

## 🛠 Tech Stack

- **Node.js** 18+
- **Express** 5

---

## 📂 Project Structure

```
.
├── server.js          # App entry point: middleware, routes, error handling
├── routes/
│   └── hello.js       # Example route module (GET /api/hello)
├── .env.example       # Environment variable template
├── package.json
└── README.md
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

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3000` | Port the server listens on. |

### Run

```bash
npm run dev    # auto-restarts on file changes (node --watch)
npm start      # production start
```

The server starts at `http://localhost:3000`.

---

## 📡 API Reference

| Method | Endpoint | Description | Example response |
| --- | --- | --- | --- |
| `GET` | `/health` | Service health and uptime | `{ "status": "ok", "uptime": 12.34 }` |
| `GET` | `/api/hello` | Example greeting route | `{ "message": "Hello from Douglas 🚀" }` |

```bash
curl http://localhost:3000/api/hello
# { "message": "Hello from Douglas 🚀" }

curl http://localhost:3000/health
# { "status": "ok", "uptime": 12.34 }
```

Unknown routes return `404 { "error": "Not Found" }`; unhandled errors return `500 { "error": "Internal Server Error" }`.

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

2. Mount it in `server.js`:

   ```js
   app.use('/api', require('./routes/users'));
   ```

---

## 🔭 Future Improvements

- Add a test suite (e.g. Jest + Supertest) and CI.
- Add request logging (e.g. `morgan`) and input validation.
- Add linting/formatting (ESLint + Prettier) configs.
- Add Docker support for containerized deployment.

---

## 👤 About the Developer

**Douglas Alfaro** is a full-stack developer with experience building practical business
solutions using modern web technologies, automation, APIs, and cloud-based tools. His work
focuses on creating useful, scalable applications for real-world business problems.

- GitHub: [@douglasalfaro](https://github.com/douglasalfaro)

---

## 📄 License

Released under the [MIT License](LICENSE).
