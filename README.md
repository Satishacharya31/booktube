# BookTube - A YouTube-like Social Media Platform for Books

BookTube is a full-stack social media application designed for book lovers. It aims to replicate YouTube's core design and functionality, but with books and novels as the primary content.

## Features (Planned)

*   **Homepage:** YouTube-like grid of book thumbnails, search, and navigation.
*   **Read Page:** Realistic page-turning effect for reading books (PDFs or text-based).
*   **Book Upload:** Upload PDFs or write books using a rich text editor.
*   **User Profiles:** User bios, uploaded books, and subscriptions.
*   **Interactions:** Like books, post comments, subscribe to authors.
*   **And more...**

## Tech Stack (Planned)

*   **Frontend:** Next.js (TypeScript, App Router), Tailwind CSS, ReactPageFlip, Tiptap, Fabric.js
*   **Backend:** Node.js, Express.js (TypeScript), REST API
*   **Database:** PostgreSQL with Prisma
*   **Storage:** Cloudinary (for book covers, PDFs, and images in rich text editor)
*   **Authentication:** JWT, NextAuth.js
*   **Deployment:** Docker for local development. (Vercel/AWS/Heroku planned for production)

## Getting Started (Local Development)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Docker](https://www.docker.com/get-started) installed on your machine.
*   [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop).

### Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Create a `.env` file:**
    Copy the example environment file and customize it with your settings (especially for Cloudinary if you plan to test uploads, though default database credentials should work out-of-the-box with Docker Compose).
    ```bash
    cp .env.example .env
    ```
    *Note: You will need to fill in `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, and potentially change `JWT_SECRET` in the `.env` file.*

3.  **Build and run the services using Docker Compose:**
    This command will build the Docker images for the frontend and backend (if `Dockerfile.dev` files are present and correctly configured) and start all services (frontend, backend, postgres, redis).
    ```bash
    docker-compose up --build
    ```
    *Initially, this might fail if `Dockerfile.dev` files are not yet created in `app/` and `server/` directories. We will add these in subsequent steps.*

4.  **Accessing the applications:**
    *   Frontend (Next.js): [http://localhost:3000](http://localhost:3000)
    *   Backend (Express API health check): [http://localhost:3001/api/health](http://localhost:3001/api/health)
    *   PostgreSQL database will be running on port 5432 (accessible to other services in the Docker network).
    *   Redis will be running on port 6379.

### Database Migrations (Prisma)

Once the backend service is running, you might need to apply database migrations. This typically involves running Prisma commands within the backend container.

To run Prisma migrate:
```bash
docker-compose exec backend npx prisma migrate dev --name init
```
*(This assumes you have a migration to apply. We will set up initial migrations later.)*

---

*This README is a work in progress and will be updated as the project develops.*
