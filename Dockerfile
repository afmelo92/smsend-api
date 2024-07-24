# Use a Node.js base image
FROM node:lts-alpine

# Add tool which will fix init process
RUN apk add dumb-init

# Optimise for production
ENV NODE_ENV production

# Copy app files
COPY --chown=webmaster:webmaster . /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install dependencies using pnpm
RUN npm install -g pnpm && \
    pnpm install

# friends don’t let friends run containers as root!
USER webmaster

# Expose the port your app runs on
EXPOSE 8080

WORKDIR /usr/src/app/src

# Command to run the application
CMD ["dumb-init", "node", "index.mjs" ]
