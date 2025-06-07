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

# Set environment variable for Railway's dynamic port
ENV PORT=8080

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY health /usr/share/nginx/html/health

EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]