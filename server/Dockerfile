# Create image based on the official Node 10 image from the dockerhub
FROM node:18-buster AS base

RUN npm install nodemon -g

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 5000

#DEV
CMD ["npm", "run", "dev"]