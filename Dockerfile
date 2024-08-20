FROM node:22.6.0-slim
LABEL maintainer="feihu1024@1690806685@qq.com"

# Create app directory
RUN mkdir -p /root/node-bmtiles-server

# Bundle app source
COPY . /root/node-bmtiles-server
WORKDIR /root/node-bmtiles-server

RUN mkdir -p /root/mbtiles

# Install app dependencies
# RUN npm install

# Enables customized options using environment variables
ENV MBTILES_SERVER_CACHE='/root/mbtiles'
ENV MBTILES_SERVER_PROTOCOL='http'
ENV MBTILES_SERVER_DOMAIN='localhost'
ENV MBTILES_SERVER_PORT='5000'
ENV MBTILES_SERVER_SSL_KEY='/root/mbtiles/server.key'
ENV MBTILES_SERVER_SSL_CERT='/root/mbtiles/server.cert'
ENV MBTILES_SERVER_VERBOSE='true'

# Run App
EXPOSE 5000
CMD ["node", "./bin/mbtiles-server.js", "--verbose"]
