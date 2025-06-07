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

# Copy a custom Nginx configuration template
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

COPY health /usr/share/nginx/html/health

# Create a startup script that substitutes the PORT
RUN echo '#!/bin/sh' > /docker-entrypoint.sh && \
    echo 'envsubst "\$PORT" < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf' >> /docker-entrypoint.sh && \
    echo 'nginx -g "daemon off;"' >> /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

# Expose the port
EXPOSE $PORT

# Use the startup script
CMD ["/docker-entrypoint.sh"]