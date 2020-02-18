FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm run build
COPY dist . 
COPY ormconfig.js .
COPY wait-for-it.sh .
CMD node index.js