FROM node:16.12-buster AS builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
ARG AUTH0_SECRET
ARG AUTH0_BASE_URL
ARG AUTH0_CLIENT_ID
ARG AUTH0_CLIENT_SECRET
ARG AUTH0_ISSUER_BASE_URL
ARG GRAPHQL_API_URL
ARG GRAPHQL_API_SSR_URL
RUN yarn build

FROM node:16.12-buster-slim
ENV NODE_ENV production
USER node
EXPOSE 3000
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder /usr/src/app/node_modules node_modules
COPY --chown=node:node --from=builder /usr/src/app/.next .next
COPY --chown=node:node . .
CMD ["yarn", "start"]

##
## NOTE: old manifest
##
# Base on offical Node.js Alpine image
#FROM node:alpine
#
## Set working directory
#WORKDIR /usr/app
#RUN chown -R node:node .
#
## Run container as non-root (unprivileged) user
## The node user is provided in the Node.js Alpine base image
#USER node
#
## Copy package.json and package-lock.json before other files
## Utilise Docker cache to save re-installing dependencies if unchanged
#COPY --chown=node:node package.json yarn.lock ./
#
## Install dependencies
#RUN yarn install --production
#
## Copy all files
#COPY --chown=node:node ./ ./
#
## Build app
#RUN yarn build
#
## Expose the listening port
#EXPOSE 3000
#
#ENV NODE_ENV production
#
## Run npm start script with PM2 when container starts
#CMD [ "yarn", "start" ]
