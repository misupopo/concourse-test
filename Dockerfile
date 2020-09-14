FROM node:10.16.0-alpine

ENV LISTEN_PORT=80

COPY ./tests /tests
COPY ./package.json /package.json

RUN npm install

EXPOSE 80
CMD tail -F
