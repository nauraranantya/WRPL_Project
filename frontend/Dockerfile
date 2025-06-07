# Stage 1: Build React app
FROM node:20-slim as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

ENV PORT=8080

# Copy built React app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx template config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy health file
COPY health /usr/share/nginx/html/health

# Copy and make entrypoint executable
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8080

CMD ["/entrypoint.sh"]