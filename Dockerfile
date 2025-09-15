FROM node:20-slim

WORKDIR /app

# Copy package files (Docker will cache this layer if they don't change)
COPY package.json package-lock.json ./

# Install dependencies using npm ci (faster and more reliable than npm install)
RUN npm ci --omit=dev && npm cache clean --force

# Copy the rest of the application
COPY . .

# Create non-root user for security
RUN groupadd -r appuser && useradd -r -g appuser appuser
RUN chown -R appuser:appuser /app
USER appuser

# Configure port
ENV PORT=8080
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
