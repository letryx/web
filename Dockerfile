FROM node:16-buster AS builder
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

FROM node:16-buster-slim
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV production
USER node
EXPOSE 3000
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder /usr/src/app/node_modules node_modules
COPY --chown=node:node --from=builder /usr/src/app/.next .next
COPY --chown=node:node . .
CMD ["yarn", "start"]
