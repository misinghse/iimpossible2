# Use a lightweight Node.js image for the build step
FROM node:18.18.0-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Run ESLint and attempt to fix any linting issues
RUN npx eslint . --fix || true

# Build the Next.js application
RUN npm run build

# Use a smaller Node.js image for the runtime
FROM node:18.18.0-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
