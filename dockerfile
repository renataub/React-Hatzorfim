# This instruction pushes the base image from a remote repository 
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

# execute any command by adding a new layer on top of the current ones
RUN npm install

#These instructions will copy all files we need into the working directory.
COPY . .

# Starting our application
CMD ["npm","start"]