FROM node:16
ENV NODE_ENV $NODE_ENV
WORKDIR /app
COPY package.json /app
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get install -y ant && \
    apt-get clean;
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm install typescript -g
COPY . /app
CMD ["npm","start"]


