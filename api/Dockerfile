FROM node:14.21.3

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src

ENV PORT=3000
EXPOSE $PORT

CMD [ "node", "src/index.js" ]