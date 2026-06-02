FROM node:latest
WORKDIR /react_app
COPY ../../dev/frontend/app/react_app/package.json .
RUN npm install
COPY ../../dev/frontend/app/react_app/ .
RUN cd ./dev/frontend/app/react_app
RUN npm run build