# Contributing

Thanks for your interest in Node API Boilerplate! Issues and pull requests are welcome.

## Getting set up

See the **Getting Started** section of the [README](README.md) for prerequisites and how to
run the server locally (`npm install`, then `npm run dev`).

## Development workflow

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feat/your-change
   ```
2. Make your change. Keep it small, focused, and consistent with the existing style.
3. Verify the server still starts and the endpoints respond:
   ```bash
   npm start
   curl http://localhost:3000/health
   curl http://localhost:3000/api/hello
   ```
4. Commit with a clear, imperative message and open a pull request describing
   **what** changed and **why**.

## Guidelines

- **Never commit secrets.** Real values belong in `.env` (gitignored); only
  `.env.example` (placeholders) is committed.
- Add new routes as modules in `routes/` and mount them in `server.js`.
- Keep the boilerplate minimal — prefer small, composable additions over heavy dependencies.

## Reporting issues

Open a GitHub issue with steps to reproduce, what you expected, and what happened.
