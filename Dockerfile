FROM node:18-alpine3.17

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "npm" , "run" ,"dev" ]