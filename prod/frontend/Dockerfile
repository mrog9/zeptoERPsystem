FROM node:latest
WORKDIR /react_app
COPY ./react_app/package.json .
RUN npm install
COPY react_app .
RUN npm run build