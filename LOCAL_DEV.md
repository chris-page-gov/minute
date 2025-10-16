# Local Development Quickstart for Minute

This guide explains the fastest way to run the Minute project locally using Docker Compose. No prior experience with Docker or AWS is required.

## Prerequisites
- **Docker Desktop**: Install from https://www.docker.com/products/docker-desktop
- **Git**: Install from https://git-scm.com/

## Steps

### 1. Clone the Repository
```
git clone https://github.com/chris-page-gov/minute.git
cd minute
```

### 2. Create the `.env` File
Copy the example file:
```
cp .env.example .env
```
Edit `.env` and fill in required values. For local development, you can use placeholders for most variables:
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`: Only needed if you use AWS services. For localstack, you can use dummy values.
- `SENTRY_DSN`, `POSTHOG_API_KEY`: Optional analytics integrations. Use `placeholder` or leave blank.
- `POSTGRES_HOST`: Should be `localhost` for local development.
- `LOCALSTACK_URL`: Should be `http://localhost:4566`.

### 3. Start Docker Compose
```
docker compose up -d
```
This will build and start all services in the background.

### 4. Access Services
- **Backend API**: http://localhost:8080
- **Frontend**: http://localhost:3000
- **Postgres DB**: localhost:5432
- **Localstack (AWS emulation)**: http://localhost:4566
- **Worker Dashboard**: http://localhost:8265

### 5. Stopping Services
```
docker compose down
```

## Explanation of Requirements
- **Docker Compose**: Orchestrates multiple containers for backend, frontend, database, and AWS emulation.
- **.env File**: Stores environment variables for all services. Required for configuration.
- **Localstack**: Emulates AWS services locally, so you do not need a real AWS account for development.
- **Postgres**: Database used by the backend. Data is stored in a Docker-managed volume.
- **Sentry/Posthog**: Optional analytics. Not required for local development.

## Troubleshooting
- If you see warnings about missing `.env` or variables, ensure `.env` exists and is filled in.
- If ports are in use, stop other services using those ports.
- For more details, check logs with:
  ```
  docker compose logs
  ```

## Further Help
If you have issues, check the README.md or contact the project maintainer.
