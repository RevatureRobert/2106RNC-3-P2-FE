# pull base image
FROM node:14-alpine

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest


# install dependencies first
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --force
RUN npx expo login --non-interactive -u "mat2718"
RUN expo publish
RUN expo build:web
RUN expo build:android -t apk --no-wait

# ENTRYPOINT ["node"]
ENTRYPOINT ["npm", "run"]
CMD ["web"]