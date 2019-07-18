FROM node:9.11.1-alpine as base

RUN apk add --update tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /cookie-quest

COPY ./app ./app
COPY ./package*.json ./

CMD ["npm", "run", "start"]


#############
FROM base as test

COPY ./test ./test
RUN npm install

RUN npm run test || exit 1


#############
FROM base as deploy
