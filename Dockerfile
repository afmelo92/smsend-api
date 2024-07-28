# Use a Node.js base image
FROM node:lts-alpine

# Add tool which will fix init process
RUN apk add dumb-init

# Create app directory
WORKDIR /usr/src/app

# Copy app files
COPY --chown=node:node . /usr/src/app

# Install dependencies using pnpm
RUN npm install -g pnpm && \
    pnpm install && pnpm build

# Optimise for production
ENV NODE_ENV production

# friends don’t let friends run containers as root!
USER node

# Expose the port your app runs on
EXPOSE 8080

WORKDIR /usr/src/app/dist

# Command to run the application
CMD ["dumb-init", "node", "index.js" ]
