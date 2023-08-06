FROM node:14

WORKDIR /

COPY ./src/gateway-api/package*.json .

COPY . .
COPY ./src/gateway-api .

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]
