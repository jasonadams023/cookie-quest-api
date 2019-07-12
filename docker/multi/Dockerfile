FROM node:9.11.1-alpine as base

RUN apk add --update tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /cookie-quest

COPY ./app ./app

CMD ["node", "./app/server"]


#############
FROM base as build

COPY ./package*.json ./
RUN npm i


#############
FROM build as test

COPY ./test ./test
RUN npm run test || exit 1


#############
FROM base as deploy
