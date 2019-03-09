FROM node:10.15
RUN npm install -g vue
RUN npm install -g @vue/cli
RUN npm install -g @vue/cli-init
RUN mkdir -p /frontend
WORKDIR /frontend/
COPY ./frontend /frontend/
RUN npm install