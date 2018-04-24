FROM cookie-quest-api:base

COPY ./package*.json ./
RUN npm i && npm cache clean --force

COPY . .

CMD ["npm", "run", "start:watch"]