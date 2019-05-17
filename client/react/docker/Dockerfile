FROM node:11.14.0-alpine

ARG APP_ROOT=/opt/conduit

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

COPY package.json package-lock.json tsconfig.json ./
RUN npm install

COPY . ./
RUN rm .env*

ENTRYPOINT ["npm"]
