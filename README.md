# Ruffy Test API

A simple Express.js API server with one endpoint:

- `GET /hello` returns `{ "message": "Hello from Ruffy!" }`

## Run Locally

```bash
npm install
npm start
```

The server listens on port `3000` by default. You can override it with the `PORT` environment variable.

## Run With Docker

```bash
docker build -t ruffy-test-api .
docker run -p 3000:3000 ruffy-test-api
```
-e 

---
*Powered by Commander Codee 🔥*
