# base image, getting node Docker image from registry and naming the compilation stage as node
FROM node:latest as node

# set default working directory
WORKDIR /app

# copying package.json file from local root directory — this file contains all dependencies that our app requires,
COPY package.json /app/package.json
COPY node_modules /app/node_modules

# installing necessary libraries (based on a file copied in previous step),
# RUN npm install
# RUN npm list

# copying all remaining files with a source code,
COPY . /app

EXPOSE 4200 49153

CMD npm run start