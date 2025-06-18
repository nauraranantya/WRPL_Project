# Bookeefy

A personal bookstore website for selling and buying from the seller's collection.

## Project Overview

Bookeefy is a comprehensive e-commerce application designed for book enthusiasts, enabling users to buy and sell books from a seller's personal collection. The application features a modern React frontend, a robust Node.js backend, and a reliable MongoDB database, all fully containerized with Docker for seamless deployment and scalability.

This project aims to provide a user-friendly platform with functionalities such as user registration and authentication, Browse product listings, adding items to a shopping cart, and a complete checkout process. The Dockerized setup ensures consistent environments across development and production, making it easy to set up, run, and maintain the application.

## Setup Instructions

This section outlines the steps required to get Bookeefy up and running on your local machine using Docker.

### Prerequisites

  - Docker Engine 20.10+
  - Docker Compose 2.0+
  - 4GB RAM minimum
  - 10GB free disk space

### Environment Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/nauraranantya/WRPL_Project.git
    cd WRPL_Project
    ```

2.  **Create environment file**

    ```bash
    cp .env.example .env
    ```

3.  **Update environment variables in .env**
    Replace the placeholder values with your actual configurations. For Cloudinary, you'll need an account to get your credentials. For `JWT_SECRET`, generate a strong, random string.

    ```env
    # Cloudinary Configuration
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_SECRET_KEY=your_secret_key

    # JWT Secret
    JWT_SECRET=your_super_secret_jwt_key_here

    # MongoDB credentials
    MONGO_ROOT_USERNAME=admin
    MONGO_ROOT_PASSWORD=securepassword123
    ```

### Docker Commands

#### Development Environment

**Start all services:**

```bash
docker-compose -f docker-compose.dev.yml up -d
```

**View logs:**

```bash
docker-compose -f docker-compose.dev.yml logs -f
```

**Stop services:**

```bash
docker-compose -f docker-compose.dev.yml down
```

**Rebuild and start:**

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```

**Check service status:**

```bash
docker-compose -f docker-compose.dev.yml ps
```

#### Production Environment

**Start production stack:**

```bash
docker-compose -f docker-compose.prod.yml up -d
```

**Check production health:**

```bash
docker-compose -f docker-compose.prod.yml ps
```

**View production logs:**

```bash
docker-compose -f docker-compose.prod.yml logs -f
```

**Stop production services:**

```bash
docker-compose -f docker-compose.prod.yml down
```

### Service Configuration

#### Frontend (React + Vite)

  - **Development:** `http://localhost:5173`
  - **Production:** `http://localhost:80`
  - **Deployed:** `https://bookeefy.up.railway.app/`
  - **Health Check:** `curl http://localhost:5173` (dev) or `curl http://localhost` (prod)

#### Backend (Node.js)

  - **Port:** `http://localhost:4000`
  - **Health Check:** `curl http://localhost:4000/health`
  - **API Documentation:** `http://localhost:4000/api-docs`

### Testing Your Setup

1.  **Verify all containers are running**

    **Development:**

    ```bash
    docker-compose -f docker-compose.dev.yml ps
    ```

    **Production:**

    ```bash
    docker-compose -f docker-compose.prod.yml ps
    ```

    Expected output (similar to):

    ```
    NAME            IMAGE                       STATUS
    wrpl-backend    wrpl-project-backend        Up (healthy)
    wrpl-frontend   wrpl-project-frontend       Up (healthy)
    wrpl-mongodb    mongo:7.0                   Up (healthy)
    ```

2.  **Test connectivity**

    **Frontend health:**

    ```bash
    # Development
    curl http://localhost:5173

    # Production
    curl http://localhost
    ```

    **Backend health:**

    ```bash
    curl http://localhost:4000/health
    ```

    **Database connectivity:**

    ```bash
    # Development
    docker-compose -f docker-compose.dev.yml exec database mongosh --eval "db.adminCommand('ping')"

    # Production
    docker-compose -f docker-compose.prod.yml exec database mongosh --eval "db.adminCommand('ping')"
    ```

## System Architecture

The Bookeefy application follows a microservices-inspired architecture, leveraging Docker to containerize each component. This design promotes modularity, scalability, and ease of deployment.

**Components:**

  * **Frontend (React + Vite):** A single-page application (SPA) built with React and Vite for a fast and interactive user interface. It communicates with the backend API to fetch and display data.
  * **Backend (Node.js):** A RESTful API server developed with Node.js. It handles business logic, user authentication, data processing, and interacts with the MongoDB database.
  * **Database (MongoDB):** A NoSQL document database used to store all application data, including user information, book listings, orders, etc.

**Containerization with Docker:**

Each component (frontend, backend, and database) runs in its own Docker container. Docker Compose is used to define and manage the multi-container application, enabling:

  * **Isolated Environments:** Each service operates in its own isolated environment, preventing conflicts and ensuring consistent behavior.
  * **Simplified Deployment:** The entire application stack can be deployed with a single `docker-compose up` command.
  * **Scalability:** Individual services can be scaled independently as needed.
  * **Portability:** The Dockerized application can run consistently across different environments (development, staging, production).

**Networking:**

Docker Compose creates a default network for all services within the application, allowing them to communicate with each other using their service names (e.g., the backend can connect to the database using `mongodb` or `database` as the hostname, depending on the `docker-compose.yml` configuration).

**Data Persistence:**

MongoDB data is persisted using Docker volumes, ensuring that data is not lost when containers are stopped or removed.

**Deployment Environments:**

Two separate `docker-compose` files are provided:

  * `docker-compose.dev.yml`: Configured for development, often including features like hot-reloading and detailed logging.
  * `docker-compose.prod.yml`: Optimized for production, with considerations for performance, security, and stability (e.g., Nginx for serving static files, optimized image sizes).

<!-- end list -->

```
WRPL_Project/
├── backend/                  # Node.js Backend service
│   ├── Dockerfile            # Dockerfile for backend image
│   ├── .dockerignore         # Files to ignore during backend build
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Backend entry point
│   └── ...                   # Other backend source files
├── frontend/                 # React Frontend service
│   ├── Dockerfile            # Dockerfile for frontend dev image
│   ├── Dockerfile.prod       # Dockerfile for frontend prod image (with Nginx)
│   ├── .dockerignore         # Files to ignore during frontend build
│   ├── nginx.conf            # Nginx configuration for production frontend
│   ├── package.json          # Frontend dependencies
│   └── ...                   # Other frontend source files
├── docker-compose.dev.yml    # Docker Compose configuration for development
├── docker-compose.prod.yml   # Docker Compose configuration for production
├── .env                      # Environment variables for the application
├── mongo-init.js             # MongoDB initialization script (optional)
└── README.md                 # Project README
```

## User Guide

This guide provides instructions on how to interact with the Bookeefy application once it's up and running.

### Accessing the Application

After successfully starting the services (using either `docker-compose -f docker-compose.dev.yml up -d` for development or `docker-compose -f docker-compose.prod.yml up -d` for production), you can access the Bookeefy website:

  * **Development Environment:** Open your web browser and navigate to `http://localhost:5173`
  * **Production Environment:** Open your web browser and navigate to `http://localhost:80` (or simply `http://localhost`)
  * **Deployed Version:** You can also access the publicly deployed version at `https://bookeefy.up.railway.app/`

### Basic User Flow

Follow these steps to experience the core functionalities of Bookeefy:

1.  **Register a New Account:**

      * On the homepage, look for a "Sign Up" or "Register" link.
      * Click on it and fill in the required details (e.g., username, email, password).
      * Submit the form to create your new account.

2.  **Login with Credentials:**

      * After registration (or if you already have an account), navigate to the "Login" page.
      * Enter your registered email and password.
      * Click "Login" to access your account dashboard.

3.  **Browse Products:**

      * Once logged in, you will typically be redirected to the main product catalog or homepage.
      * Browse through the available book listings. You might find categories, search bars, or filters to help you find specific books.
      * Click on a book to view its detailed page, including descriptions, price, and seller information.

4.  **Add Items to Cart:**

      * On a book's detail page, locate the "Add to Cart" button.
      * Clicking this button will add the selected book to your shopping cart. You might see a notification or a small cart icon update with the number of items.
      * You can continue Browse and adding more books to your cart.

5.  **Complete Checkout Process:**

      * When you are ready to purchase, navigate to your "Shopping Cart" or "Checkout" page. This is usually accessible via a cart icon in the navigation bar.
      * Review the items in your cart and their total cost.
      * Proceed to checkout, where you might be prompted for shipping information, payment details, and to confirm your order.
      * Follow the on-screen instructions to finalize your purchase.

### Additional Features (Depending on Implementation)

  * **Selling Books:** If the platform supports sellers, look for options like "List a Book" or "My Books" to add your own collection for sale.
  * **User Profile Management:** You may be able to edit your profile, manage addresses, or view your order history.
  * **Search and Filters:** Utilize the search bar and filter options to quickly find specific books or narrow down results by genre, author, price, etc.
  * **Wishlist:** Some platforms offer a wishlist feature to save books for later.

### Troubleshooting User Issues

  * **Cannot access the website:**
      * Ensure all Docker containers are running healthy (refer to "Testing Your Setup" above).
      * Check your firewall settings to ensure ports `5173` (dev) or `80` (prod) are not blocked.
      * Verify the correct URL (`http://localhost:5173` or `http://localhost`). If accessing the deployed version, ensure you have an active internet connection.
  * **Login issues:**
      * Double-check your email and password for typos.
      * If you forgot your password, look for a "Forgot Password" link.
      * Check the backend logs for any authentication errors (`docker-compose -f docker-compose.dev.yml logs backend`).
  * **Application not responding as expected:**
      * Check the browser's developer console for any JavaScript errors.
      * Review the logs for both frontend and backend services for error messages.

For more advanced troubleshooting or development-related inquiries, please refer to the "Troubleshooting" and "Development Commands" sections in this README.

-----

## Docker Setup

A complete e-commerce application with React frontend, Node.js backend, and MongoDB database, fully containerized with Docker.

## Quick Start

### Prerequisites

  - Docker Engine 20.10+
  - Docker Compose 2.0+
  - 4GB RAM minimum
  - 10GB free disk space

### Environment Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/nauraranantya/WRPL_Project.git
    cd WRPL_Project
    ```

2.  **Create environment file**

    ```bash
    cp .env.example .env
    ```

3.  **Update environment variables in .env**

    ```env
    # Cloudinary Configuration
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_SECRET_KEY=your_secret_key

    # JWT Secret
    JWT_SECRET=your_super_secret_jwt_key_here

    # MongoDB credentials
    MONGO_ROOT_USERNAME=admin
    MONGO_ROOT_PASSWORD=securepassword123
    ```

## Docker Commands

### Development Environment

**Start all services:**

```bash
docker-compose -f docker-compose.dev.yml up -d
```

**View logs:**

```bash
docker-compose -f docker-compose.dev.yml logs -f
```

**Stop services:**

```bash
docker-compose -f docker-compose.dev.yml down
```

**Rebuild and start:**

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```

**Check service status:**

```bash
docker-compose -f docker-compose.dev.yml ps
```

### Production Environment

**Start production stack:**

```bash
docker-compose -f docker-compose.prod.yml up -d
```

**Check production health:**

```bash
docker-compose -f docker-compose.prod.yml ps
```

**View production logs:**

```bash
docker-compose -f docker-compose.prod.yml logs -f
```

**Stop production services:**

```bash
docker-compose -f docker-compose.prod.yml down
```

## Service Configuration

### Frontend (React + Vite)

  - **Development:** http://localhost:5173
  - **Production:** http://localhost:80
  - **Deployed:** `https://bookeefy.up.railway.app/`
  - **Health Check:** `curl http://localhost:5173` (dev) or `curl http://localhost` (prod)

### Backend (Node.js)

  - **Port:** http://localhost:4000
  - **Health Check:** `curl http://localhost:4000/health`
  - **API Documentation:** http://localhost:4000/api-docs

## Testing Your Setup

### 1\. Verify all containers are running

**Development:**

```bash
docker-compose -f docker-compose.dev.yml ps
```

**Production:**

```bash
docker-compose -f docker-compose.prod.yml ps
```

Expected output:

```
NAME            IMAGE                       STATUS
wrpl-backend    wrpl-project-backend        Up (healthy)
wrpl-frontend   wrpl-project-frontend       Up (healthy)
wrpl-mongodb    mongo:7.0                   Up (healthy)
```

### 2\. Test connectivity

**Frontend health:**

```bash
# Development
curl http://localhost:5173

# Production
curl http://localhost
```

**Backend health:**

```bash
curl http://localhost:4000/health
```

**Database connectivity:**

```bash
# Development
docker-compose -f docker-compose.dev.yml exec database mongosh --eval "db.adminCommand('ping')"

# Production
docker-compose -f docker-compose.prod.yml exec database mongosh --eval "db.adminCommand('ping')"
```

### 3\. Test complete user flow

1.  Open http://localhost:5173 (dev) or http://localhost (prod) or [https://bookeefy.up.railway.app/](https://bookeefy.up.railway.app/)
2.  Register a new account
3.  Login with credentials
4.  Browse products
5.  Add items to cart
6.  Complete checkout process

## Project Structure

```
WRPL_Project/
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── server.js
│   └── ...
├── frontend/
│   ├── Dockerfile
│   ├── Dockerfile.prod
│   ├── .dockerignore
│   ├── nginx.conf
│   ├── package.json
│   └── ...
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .env
├── mongo-init.js
└── README.md
```

## Useful Docker Commands

### Container Management

**List running containers:**

```bash
docker ps
```

**View container logs:**

```bash
# Specific container
docker logs <container_name>

# All services (development)
docker-compose -f docker-compose.dev.yml logs -f

# All services (production)
docker-compose -f docker-compose.prod.yml logs -f
```

**Execute commands in container:**

```bash
docker exec -it <container_name> /bin/sh
```

**Stop specific container:**

```bash
docker stop <container_name>
```

**Remove containers:**

```bash
docker rm <container_name>
```

### Image Management

**List images:**

```bash
docker images
```

**Remove unused images:**

```bash
docker image prune
```

**Remove specific image:**

```bash
docker rmi <image_name>
```

**Clean up everything:**

```bash
docker system prune -a
```

### Development Commands

**Rebuild specific service:**

```bash
# Development
docker-compose -f docker-compose.dev.yml build backend

# Production
docker-compose -f docker-compose.prod.yml build frontend
```

**Scale services:**

```bash
docker-compose -f docker-compose.dev.yml up -d --scale backend=2
```

**View resource usage:**

```bash
docker stats
```

**Backup database:**

```bash
# Development
docker exec wrpl-mongodb mongodump --archive --gzip > backup.gz

# Production
docker-compose -f docker-compose.prod.yml exec database mongodump --archive --gzip > backup.gz
```

## Environment-Specific Operations

### Development

**Start with live reload:**

```bash
docker-compose -f docker-compose.dev.yml up -d
```

**View development logs:**

```bash
docker-compose -f docker-compose.dev.yml logs -f frontend backend
```

**Restart a service:**

```bash
docker-compose -f docker-compose.dev.yml restart backend
```

### Production

**Deploy production stack:**

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

**Monitor production services:**

```bash
docker-compose -f docker-compose.prod.yml ps
docker-compose -f docker-compose.prod.yml logs --tail=50 -f
```

**Update production deployment:**

```bash
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d --build
```

## Production Considerations

### Security

  - All containers run as non-root users
  - Secrets managed via environment variables
  - Security headers implemented in Nginx
  - Database access restricted to application network

### Performance

  - Resource limits configured for all services
  - Multi-stage builds for optimized image sizes
  - Gzip compression enabled
  - Static asset caching implemented

### Monitoring

  - Health checks for all services
  - Structured logging with rotation
  - Proper restart policies

## Troubleshooting

### Common Issues

**Port conflicts:**

```bash
# Check what's using port 4000
lsof -i :4000
# Kill process if needed
kill -9 <PID>
```

**Database connection issues:**

```bash
# Check database logs
docker-compose -f docker-compose.dev.yml logs database

# Verify network connectivity
docker-compose -f docker-compose.dev.yml exec backend ping database
```

**Frontend not loading:**

```bash
# Check build logs
docker-compose -f docker-compose.dev.yml logs frontend

# Verify environment variables
docker-compose -f docker-compose.dev.yml exec frontend env
```

**Memory issues:**

```bash
# Check resource usage
docker stats

# Increase Docker memory limit in Docker Desktop
```

### Clean Reset

**Development environment:**

```bash
# Stop everything
docker-compose -f docker-compose.dev.yml down

# Remove volumes (This deletes all data)
docker-compose -f docker-compose.dev.yml down -v

# Clean system
docker system prune -a

# Rebuild everything
docker-compose -f docker-compose.dev.yml up --build -d
```

**Production environment:**

```bash
# Stop everything
docker-compose -f docker-compose.prod.yml down

# Remove volumes (This deletes all data)
docker-compose -f docker-compose.prod.yml down -v

# Rebuild everything
docker-compose -f docker-compose.prod.yml up --build -d
```

## Performance Optimization

### Development

  - Use volumes for hot reloading
  - Optimize .dockerignore files
  - Use multi-stage builds

### Production

  - Implement Redis for session storage
  - Add CDN for static assets
  - Configure load balancing
  - Implement database connection pooling

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

## Support

If you encounter issues:

1.  Check the troubleshooting section
2.  Review container logs: `docker-compose -f docker-compose.dev.yml logs`
3.  Verify environment configuration
4.  Ensure all ports are available
5.  Check Docker daemon status

## Additional Resources

  - [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
  - [Docker Compose Documentation](https://docs.docker.com/compose/)
  - [MongoDB Docker Hub](https://hub.docker.com/_/mongo)
  - [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

-----

## Deployment Checklist

  - [ ] Environment variables configured
  - [ ] Health checks passing (`docker-compose -f docker-compose.dev.yml ps`)
  - [ ] Database backup strategy implemented
  - [ ] Monitoring setup completed
  - [ ] SSL certificates configured (production)
  - [ ] Domain DNS configured (production)
  - [ ] Performance testing completed
  - [ ] Security audit passed
