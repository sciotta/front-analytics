FROM node:10.14.1-alpine

RUN apk add --no-cache --update git \
  make g++ python postgresql-dev grep bash

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

ENV NPM_CONFIG_LOGLEVEL info
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN npm install -g typescript@3.8.3 --quiet

COPY --chown=node:node . /home/node/app/

RUN npm ci --quiet --silent
