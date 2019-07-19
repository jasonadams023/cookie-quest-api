FROM node:12.6.0-alpine as base

RUN apk add --update tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /cookie-quest

COPY ./app ./app
COPY ./package*.json ./

CMD ["npm", "run", "start"]


#############
FROM base as dev

RUN apk add git
RUN npm install

CMD ["npm", "run", "start:watch"]


#############
FROM dev as test

COPY ./test ./test

RUN npm run test || exit 1


#############
FROM base as deploy
