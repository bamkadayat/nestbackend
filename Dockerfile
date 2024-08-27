FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN apk add git make g++ alpine-sdk python3 py3-pip unzip
RUN yarn install
RUN yarn prisma:generate
RUN yarn build

FROM node:20-alpine
RUN apk add zip unzip bash --no-cache
WORKDIR /app
COPY --from=builder /app/dist dist

ENV NODE_ENV=production
COPY package.json ./
COPY yarn.lock ./
COPY --from=builder /app/prisma ./prisma/

RUN yarn install --prod

ENV TZ=Europe/Oslo
EXPOSE 8080

CMD ["yarn", "run", "start"]