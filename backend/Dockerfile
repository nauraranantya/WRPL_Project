# Use official Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Start the app
CMD ["node", "server.js"]