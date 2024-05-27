FROM node:16

WORKDIR /usr/src/app

SHELL ["/bin/bash", "-c"]

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4002

CMD ["node", "server.js"]