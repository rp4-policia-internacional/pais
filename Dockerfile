FROM node:18.17.1-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json prisma/* babel.config.js ./

USER node 
RUN yarn 
COPY --chown=node:node . .

RUN yarn build


EXPOSE 3333

CMD ["yarn", "start"]
