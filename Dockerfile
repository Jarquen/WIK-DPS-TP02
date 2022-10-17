FROM node:latest as build
WORKDIR /app
COPY . /app
RUN npm i
RUN npx tsc
ENV PING_LISTEN_PORT=3000

FROM node:latest as execution
RUN useradd -ms /bin/bash resuser
USER resuser
COPY --from=build /app ./
CMD node build/index.js