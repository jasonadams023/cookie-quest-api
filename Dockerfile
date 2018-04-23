FROM node:9.11.1-alpine

RUN apk add --update tini
ENTRYPOINT ["/sbin/tini", "--"]

EXPOSE 3000

# COPY ./package.json .
# RUN npm i && npm cache clean --force

COPY ./app ./app

CMD ["node", "./app/server"]