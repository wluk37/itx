FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app

COPY yarn.lock /src/app

RUN yarn install

COPY . .

CMD ["yarn", "db"]