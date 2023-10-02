FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN npm run build 

EXPOSE 3000

CMD ["npx", "next", "start"]