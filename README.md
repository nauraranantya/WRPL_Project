# Bookeefy

A personal bookstore website for selling and buying from the seller's collection.

---

## Project Overview

Bookeefy is a comprehensive e-commerce platform for book lovers to buy and sell books from personal collections. It includes a React frontend, Node.js backend, and MongoDB database, all containerized using Docker for smooth deployment across environments.

Core features include:
- User registration and authentication
- Browsing product listings
- Shopping cart functionality
- Full checkout process

---

## Setup Instructions

### Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- Minimum 4GB RAM
- 10GB free disk space

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nauraranantya/WRPL_Project.git
   cd WRPL_Project
    ```

2. **Create environment file**

   ```bash
   cp .env.example .env
   ```

3. **Update environment variables**

   ```env
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_SECRET_KEY=your_secret_key
   JWT_SECRET=your_super_secret_jwt_key_here
   MONGO_ROOT_USERNAME=admin
   MONGO_ROOT_PASSWORD=securepassword123
   ```

### Manual Setup
If you prefer to run the services without Docker, follow the steps below to manually set up each component.

**Frontend**
```bash
cd frontend
npm install
npm run dev        # Starts frontend at http://localhost:5173
```
**Backend**

```bash
cd backend
npm install
npm run dev        # Starts backend API at http://localhost:4000
```
> Make sure MongoDB is running locally or update the `.env` to point to your MongoDB URI.

---

**Admin Panel**
```bash
cd admin
npm install
npm run dev        # Starts admin panel (check specific port in configuration)
```

### Docker Commands

#### Development

```bash
docker-compose -f docker-compose.dev.yml up -d           # Start services
docker-compose -f docker-compose.dev.yml logs -f         # View logs
docker-compose -f docker-compose.dev.yml down            # Stop services
docker-compose -f docker-compose.dev.yml up --build -d   # Rebuild & start
docker-compose -f docker-compose.dev.yml ps              # Check status
```

#### Production

```bash
docker-compose -f docker-compose.prod.yml up -d          # Start stack
docker-compose -f docker-compose.prod.yml ps             # Health check
docker-compose -f docker-compose.prod.yml logs -f        # View logs
docker-compose -f docker-compose.prod.yml down           # Stop services
```

---

## System Architecture

Bookeefy uses a modular, containerized architecture with the following components:

### Components

* **Frontend:** React + Vite SPA; communicates with the backend via REST API.
* **Backend:** Node.js RESTful API server with JWT auth and MongoDB integration.
* **Database:** MongoDB NoSQL database for storing user data, book listings, orders.

### Docker Features

* Isolated service environments
* Simplified deployment
* Scalable and portable
* MongoDB data persistence via Docker volumes

### Networking

Services communicate via Docker Compose network using service names.

### Deployment Environments

* `docker-compose.dev.yml`: For development with hot-reloading and logging.
* `docker-compose.prod.yml`: For production with optimizations and Nginx.

### Directory Structure

```
WRPL_Project/
├── backend/              # Node.js backend
├── frontend/             # React frontend
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .env
├── mongo-init.js
└── README.md
```

---

## User Guide

### Accessing the App

* **Dev:** [http://localhost:5173](http://localhost:5173)
* **Prod:** [http://localhost](http://localhost) (port 80)
* **Deployed:** [https://bookeefy.up.railway.app/](https://bookeefy.up.railway.app/)

### User Flow

1. **Register Account:** Fill and submit the sign-up form.
2. **Login:** Use registered credentials to sign in.
3. **Browse Products:** Navigate and search book listings.
4. **Add to Cart:** Use "Add to Cart" on book details.
5. **Checkout:** Review cart, provide shipping info, and confirm order.

### Troubleshooting

* Ensure containers are up: `docker-compose ps`
* Check frontend/backend logs
* Confirm port access (5173 or 80)
* Test database:

  ```bash
  docker-compose exec database mongosh --eval "db.adminCommand('ping')"
  ```

---

## Useful Docker Commands

### Container Management

```bash
docker ps                             # List containers
docker logs <container>              # View logs
docker exec -it <container> /bin/sh  # Open shell
docker stop <container>              # Stop container
docker rm <container>                # Remove container
```

### Image Management

```bash
docker images                        # List images
docker image prune                   # Remove unused images
docker rmi <image_name>              # Remove image
docker system prune -a               # Clean up everything
```

### Development Commands

```bash
docker-compose -f docker-compose.dev.yml build backend
docker-compose -f docker-compose.dev.yml up -d --scale backend=2
docker stats                         # View resource usage
```

### Backup

```bash
docker exec wrpl-mongodb mongodump --archive --gzip > backup.gz
```

---

## Production Considerations

### Security

* Containers run as non-root
* Environment variable secrets
* Security headers via Nginx
* Restricted DB access

### Performance

* Resource limits and image optimization
* Gzip compression and asset caching

### Monitoring

* Health checks
* Structured logs with rotation
* Proper restart policies

---

## CI/CD Integration

Example GitHub Actions workflow:

```yaml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build and test
        run: |
          docker-compose -f docker-compose.dev.yml build
          docker-compose -f docker-compose.dev.yml run --rm backend npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: |
          docker-compose -f docker-compose.prod.yml build
          docker-compose -f docker-compose.prod.yml up -d
```

---

## Support

* Review logs: `docker-compose logs`
* Confirm environment and port availability
* Check Docker daemon status

---

## Additional Resources

* [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
* [Docker Compose Docs](https://docs.docker.com/compose/)
* [MongoDB on Docker Hub](https://hub.docker.com/_/mongo)
* [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

---

## Deployment Checklist

* [ ] Environment variables set
* [ ] Health checks passing
* [ ] Database backups configured
* [ ] Monitoring enabled
* [ ] SSL and DNS configured (production)
* [ ] Performance and security tested
