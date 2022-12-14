FROM node:latest
WORKDIR /app
COPY . /app
RUN npm i
RUN npx tsc
ENV PING_LISTEN_PORT=3000
RUN useradd -ms /bin/bash resuser
USER resuser
CMD node build/index.js