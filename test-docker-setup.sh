#!/bin/bash

# Test script for Docker setup
echo "🐳 Testing E-Commerce Docker Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if service is running
check_service() {
    local service_name=$1
    local expected_status=$2
    
    status=$(docker-compose ps -q $service_name | xargs docker inspect -f '{{.State.Status}}' 2>/dev/null)
    
    if [ "$status" = "$expected_status" ]; then
        echo -e "${GREEN}✅ $service_name is $expected_status${NC}"
        return 0
    else
        echo -e "${RED}❌ $service_name is not $expected_status (current: $status)${NC}"
        return 1
    fi
}

# Function to test HTTP endpoint
test_endpoint() {
    local url=$1
    local service_name=$2
    
    if curl -f -s "$url" > /dev/null; then
        echo -e "${GREEN}✅ $service_name endpoint is responding${NC}"
        return 0
    else
        echo -e "${RED}❌ $service_name endpoint is not responding${NC}"
        return 1
    fi
}

# Function to test database connectivity
test_database() {
    if docker-compose exec -T database mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Database is accessible${NC}"
        return 0
    else
        echo -e "${RED}❌ Database is not accessible${NC}"
        return 1
    fi
}

# Function to check container health
check_health() {
    local service_name=$1
    local health=$(docker-compose ps -q $service_name | xargs docker inspect -f '{{.State.Health.Status}}' 2>/dev/null)
    
    if [ "$health" = "healthy" ]; then
        echo -e "${GREEN}✅ $service_name health check passed${NC}"
        return 0
    elif [ "$health" = "unhealthy" ]; then
        echo -e "${RED}❌ $service_name health check failed${NC}"
        return 1
    else
        echo -e "${YELLOW}⚠️  $service_name health check status: $health${NC}"
        return 1
    fi
}

echo "📋 Checking Docker and Docker Compose..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running${NC}"
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker Compose is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker and Docker Compose are available${NC}"

echo ""
echo "🔍 Checking container status..."

# Check if containers are running
if ! check_service "database" "running"; then
    echo -e "${YELLOW}⚠️  Try starting with: docker-compose up -d${NC}"
    exit 1
fi

check_service "backend" "running"
check_service "frontend" "running"

echo ""
echo "🏥 Checking container health..."

check_health "database"
check_health "backend"
check_health "frontend"

echo ""
echo "🌐 Testing service endpoints..."

# Wait a moment for services to be ready
sleep 5

# Test endpoints with correct ports
test_endpoint "http://localhost:5173" "Frontend"
test_endpoint "http://localhost:5173/health" "Frontend Health"
test_endpoint "http://localhost:4000/health" "Backend API"

echo ""
echo "🗄️  Testing database connectivity..."
test_database

echo ""
echo "📊 Container resource usage:"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}"

echo ""
echo "🐳 Detailed container information:"
docker-compose ps

echo ""
echo "📝 Container logs (last 20 lines):"
echo -e "${YELLOW}--- Frontend Logs ---${NC}"
docker-compose logs --tail=20 frontend

echo -e "${YELLOW}--- Backend Logs ---${NC}"
docker-compose logs --tail=20 backend

echo -e "${YELLOW}--- Database Logs ---${NC}"
docker-compose logs --tail=20 database

echo ""
echo "🔍 If frontend has no logs, checking nginx error logs..."
docker-compose exec frontend cat /var/log/nginx/error.log 2>/dev/null || echo "Could not access nginx error logs"

echo ""
echo "🎯 Test Summary:"
echo "Frontend: http://localhost:80"
echo "Backend API: http://localhost:4000"
echo "Database: localhost:27017"

echo ""
echo -e "${GREEN}🚀 Setup test completed!${NC}"
echo "If all services are green, your Docker setup is working correctly."
echo ""
echo "Next steps:"
echo "1. Visit http://localhost:80 to use the application"
echo "2. Check the README.md for additional configuration"
echo "3. Run 'docker-compose logs -f' to monitor in real-time"
echo "4. Run 'docker-compose logs -f frontend' to see only frontend logs"