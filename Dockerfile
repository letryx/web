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
