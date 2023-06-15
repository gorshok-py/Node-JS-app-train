FROM node:12
WORKDIR /opt/app
COPY package*.json /opt/app
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
