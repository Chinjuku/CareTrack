# Stage 1: Build the Next.js app
FROM node:22.9.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

# Stage 2: Production image with only necessary files
FROM node:22.9.0-alpine AS runner

RUN apk add --no-cache openssl3

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/next.config.mjs ./

EXPOSE 3000

CMD ["npm", "run", "start"]
