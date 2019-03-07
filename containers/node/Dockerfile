FROM node:10.15
RUN npm install pm2 -g
RUN npm install nodemon -g
RUN npm install typescript -g
RUN mkdir -p /api
WORKDIR /api/
COPY ./api /api/
RUN npm install