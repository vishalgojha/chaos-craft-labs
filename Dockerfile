# Multi-stage build for Vite React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production stage - serve with Node.js for Traefik
FROM node:20-alpine AS runner

WORKDIR /app

# Install serve for static files
RUN npm install -g serve

# Copy built files
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "-l", "3000", "dist"]
