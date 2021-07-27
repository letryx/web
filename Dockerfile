# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app
RUN chown -R node:node .

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY --chown=node:node package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy all files
COPY --chown=node:node ./ ./

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3000

ENV NODE_ENV production

# Run npm start script with PM2 when container starts
CMD [ "yarn", "start" ]
