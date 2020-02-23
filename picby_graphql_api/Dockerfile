FROM node:latest
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV=production
RUN npm install
RUN npm build
COPY ./dist ./ 
ADD ormconfig.docker.js ormconfig.js
COPY wait-for-it.sh .
CMD node index.js