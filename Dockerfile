FROM node:20-alpine 

RUN \
  echo "UPDATING SYSTEM" && \
  apk update && \
  apk add --update

WORKDIR /app

RUN npm i -g yarn --force

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
