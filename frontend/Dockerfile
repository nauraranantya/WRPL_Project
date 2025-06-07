# frontend/Dockerfile
# Stage 1: Build the React application
FROM node:20-slim as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built React app to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration (optional, but good for SPAs)
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY health /usr/share/nginx/html/health

# Expose the port Nginx listens on
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]