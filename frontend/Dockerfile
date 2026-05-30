FROM node:latest AS builder
WORKDIR /app
COPY app/package*.json .
RUN npm install
COPY app/. .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
