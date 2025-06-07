# Bookeefy 
A personal bookstore website for selling and buying from the seller's collection

# Docker Setup

A complete e-commerce application with React frontend, Node.js backend, and MongoDB database, fully containerized with Docker.

## Quick Start

### Prerequisites
- Docker Engine 20.10+
- Docker Compose 2.0+
- 4GB RAM minimum
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

3. **Update environment variables in .env**
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
- **Health Check:** `curl http://localhost:5173` (dev) or `curl http://localhost` (prod)

### Backend (Node.js)
- **Port:** http://localhost:4000
- **Health Check:** `curl http://localhost:4000/health`
- **API Documentation:** http://localhost:4000/api-docs


## Testing Your Setup

### 1. Verify all containers are running

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
NAME                    IMAGE                      STATUS
wrpl-backend           wrpl-project-backend       Up (healthy)
wrpl-frontend          wrpl-project-frontend      Up (healthy)  
wrpl-mongodb           mongo:7.0                  Up (healthy)
```

### 2. Test connectivity

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

### 3. Test complete user flow
1. Open http://localhost:5173 (dev) or http://localhost (prod)
2. Register a new account
3. Login with credentials
4. Browse products
5. Add items to cart
6. Complete checkout process

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
1. Check the troubleshooting section
2. Review container logs: `docker-compose -f docker-compose.dev.yml logs`
3. Verify environment configuration
4. Ensure all ports are available
5. Check Docker daemon status

## Additional Resources
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [MongoDB Docker Hub](https://hub.docker.com/_/mongo)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

---

## Deployment Checklist
- [ ] Environment variables configured
- [ ] Health checks passing (`docker-compose -f docker-compose.dev.yml ps`)
- [ ] Database backup strategy implemented
- [ ] Monitoring setup completed
- [ ] SSL certificates configured (production)
- [ ] Domain DNS configured (production)
- [ ] Performance testing completed
- [ ] Security audit passed