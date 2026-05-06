# Multi-stage build for Vite React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config for SPA routing
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 3000;
    server_name _;
    
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
