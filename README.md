# MBTiles Server

[![Build Status](https://travis-ci.org/DenisCarriere/mbtiles-server.svg?branch=master)](https://travis-ci.org/DenisCarriere/mbtiles-server)
[![Coverage Status](https://coveralls.io/repos/github/DenisCarriere/mbtiles-server/badge.svg?branch=master)](https://coveralls.io/github/DenisCarriere/mbtiles-server?branch=master)
[![npm version](https://badge.fury.io/js/mbtiles-server.svg)](https://badge.fury.io/js/mbtiles-server)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DenisCarriere/mbtiles-server/master/LICENSE)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Provides a compatible WMTS Tile Server from MBTiles.

## 二次修改说明

​ 由于该项目原作者*Denis Carriere*已不再更新维护，其所依赖的 sqlite3-offline 也停止了更新，所以该项目只能运行于 Nodejs13 及以下版本中，使用起来及其不便。因此本人对该项目进行了更新，将其所依赖的 sqlite3-offline 替换为了 sqlite3,并且修复了一些小 bug。为方便大家使用，故此重新建立该项目仓库，欢迎大家一起前来更新维护。

## Install

```bash
$ npm install -g node-mbtiles-server
```

## Quickstart

```bash
$ node-mbtiles-server --cache /Users/mac/mbtiles --verbose --port 3000
MBTiles Server Service

  cache:         /Users/mac/mbtiles
  protocol:      http
  port:          3000
  domain:        localhost
  verbose:       true
```

## Benchmark

-   1 Active User => 400 requests/min
-   1 Passive User => 50 requests/min

| Requests | Response Time |
| -------- | ------------- |
| 1        | 33.460ms      |
| 10       | 45.223ms      |
| 100      | 374.217ms     |
| 1K       | 2.698s        |
| 10K      | 25.457s       |

**Total 24,000 requests / min**

Using `node-mbtiles-server` you could easily sustain 60 active users and up to 480 passive users. These tests were done on the server locally, network traffic and switches could slow down these results significantly.

## CLI Help

For any additional help using the CLI, use the `--help` flag.

```bash
  Provides a compatible WMTS Tile Server from MBTiles.

  Usage
    $ node-mbtiles-server

  Options
    --cache           [~/mbtiles] Cache
    --protocol        [http] Protocol
    --port            [5000] Port
    --domain          [localhost] Domain
    --verbose         [false] Verbose output
    --sslkey          [~/mbtiles/server.key] Path to the file certification (.key). For https protocol only
    --sslcert         [~/mbtiles/server.cert] Path to the file certification (.cert). For https protocol only

  Examples
    $ node-mbtiles-server --cache /Users/mac/mbtiles --port 5000 --verbose
```

## Environment Variables

Environment variables can be defined instead of entering your options via the CLI.

-   `MBTILES_SERVER_CACHE`
-   `MBTILES_SERVER_PROTOCOL`
-   `MBTILES_SERVER_PORT`
-   `MBTILES_SERVER_DOMAIN`
-   `MBTILES_SERVER_VERBOSE`
-   `MBTILES_SERVER_SSL_KEY`
-   `MBTILES_SERVER_SSL_CERT`

## Docker

A Dockerfile is provided for easy Docker deployment

```bash
$ docker build -t node-mbtiles-server .
$ docker run --rm -it \
  -p 5000:5000 \
  -v ~/mbtiles/:/root/mbtiles \
  node-mbtiles-server
```

**Start containers automatically**

<https://docs.docker.com/engine/admin/host_integration/>

```bash
$ docker run -d \
  --name node-mbtiles-server \
  -p 5000:5000 \
  -v ~/mbtiles/:/root/mbtiles \
  node-mbtiles-server
```

## WMTS

The goal of providing a WMTS enabled service is to be performance oriented and
scalable. Therefore, servers must be able to return tiles quickly. A good way to achieve
that is to use locally stored pre-rendered tiles that will not require any image
manipulation or geo-processing.

## API

### Server

**Parameters**

-   `options` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Server Options
    -   `options.cache` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** CACHE file path (optional, default `~/mbtiles`)
    -   `options.domain` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** URL Domain (optional, default `'localhost'`)
    -   `options.port` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** URL Port (optional, default `5000`)

**Examples**

```javascript
server({ cache: '/Users/mac/mbtiles', port: 5000, verbose: true });
```
