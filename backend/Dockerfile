FROM node:latest
WORKDIR /src
COPY src/package.json .
RUN npm install
COPY src/. .
CMD ["sh", "-c", "./node_modules/.bin/nodemon requestRouter.js"]