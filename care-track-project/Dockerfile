# Stage 1: Build the Next.js app
FROM node:22.9.0 AS builder

# Set working directory
WORKDIR /app

# Install specific npm version
RUN npm install -g npm@10.8.3

# Copy package.json and package-lock.json for caching dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma folder and generate Prisma client
COPY prisma ./prisma/
RUN ls ./prisma && npx prisma generate --schema=./prisma/schema.prisma

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production image with only necessary files
FROM node:22.9.0-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/.next ./

# Install only production dependencies
RUN npm install --production

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
