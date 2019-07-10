FROM node:9.11.1-alpine

RUN apk add --update tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /cookie-quest

EXPOSE 3000

COPY ../../app ./app

CMD ["node", "./app/server"]