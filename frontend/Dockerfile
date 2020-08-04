# Create image based on the official Node 9 image from dockerhub
FROM node:12.18.3-alpine

# Install specific npm version
RUN npm install npm@6.14.6

# update APK's package manager and get Make
RUN apk update && apk add make

# Set env variables
ENV NODE_ENV=production

# Remove global installation of npm
RUN rm -rf /usr/local/lib/node_modules/npm

# Move local installation of npm to global location
RUN mv node_modules/npm /usr/local/lib/node_modules/npm

# Make the working directory folder
WORKDIR /melanholic

# Install dependencies with npm
COPY *.npmrc package.json package-lock.json /tmp/
RUN cd /tmp && /usr/local/bin/npm ci
RUN mv /tmp/node_modules /melanholic

# Copy all files into working directory
COPY . /melanholic

# Expose the port the app runs in
EXPOSE 8000

# Set entrypoint
# ENTRYPOINT [""]

# Serve the app
CMD ["make", "prod"]