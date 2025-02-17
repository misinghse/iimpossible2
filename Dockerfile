# Stage 1: Build
FROM node:18.18.0-bullseye-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally (if needed)
RUN npm install -g pnpm

# Set npm configuration to increase timeouts and ensure we use the correct registry
RUN npm config set fetch-timeout 120000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set registry https://registry.npmjs.org/

# Copy package files to install dependencies
COPY package.json package-lock.json ./

# Install dependencies with increased timeout settings
RUN npm install

# Copy all files to the container
COPY . .

# (Optional) Run ESLint to fix linting issues
RUN npx eslint . --fix || true

# Build the Next.js application
RUN npm run build

# Stage 2: Runtime
FROM node:18.18.0-bullseye-slim AS runner

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally (if needed)
RUN npm install -g pnpm

# Copy the build output and dependencies from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
