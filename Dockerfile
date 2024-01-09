FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

COPY package* .
RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]