# Next.js API Fullstack Template

A fullstack application template built with Next.js, Lambda functions, and Prisma ORM.

## Features

- **Next.js** frontend with server-side rendering capabilities
- **Lambda Functions** for serverless API endpoints
- **Prisma ORM** for database interactions
- **PostgreSQL** database
- **Docker Compose** setup for easy development and deployment
- **TypeScript** support throughout the application

## Prerequisites

- Docker and Docker Compose
- Node.js (recommended version 16+)
- yarn

## Getting Started

### Clone the repository

```bash
git clone https://github.com/speksya/next-api.git
cd next-api
```

### Environment Setup

Copy the example environment file and adjust as needed:

```bash
cp .env.example .env
```

Example environment variables:

```
# Frontend and API URL configuration
NEXT_PUBLIC_API_URL="http://localhost:3000"
NEXT_PUBLIC_DATABASE_URL="postgresql://postgres:admin@postgres:5432/postgres?schema=public"

# PostgreSQL database configuration
POSTGRES_DB="postgres"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="admin"
```

### Running with Docker Compose

Build and start the application:

```bash
docker-compose up --build
```

This will:

1. Start a PostgreSQL database
2. Build and run the Next.js application
3. Set up the development environment

Access your application at [http://localhost:3000](http://localhost:3000)

## Database

This template uses PostgreSQL and Prisma ORM for database operations.

### Database Schema Management

After making changes to the Prisma schema:

```bash
# Generate Prisma client
yarn prisma:generate

# Run migrations
yarn prisma:migrate

# Run the seed script
yarn prisma:seed
```

### Database Exploration

You can use Prisma Studio to explore your database:

```bash
yarn prisma:studio
```
