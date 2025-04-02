FROM node:latest

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install

COPY . /usr/src/app

RUN yarn prisma:generate

RUN yarn build

EXPOSE 3000
