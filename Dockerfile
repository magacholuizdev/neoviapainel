FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install --network-timeout 1000000

RUN npm run build 

EXPOSE 3000

CMD ["npx", "next", "start"]