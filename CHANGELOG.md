# Changelog

## [3.4.1](https://github.com/feihu1024/node-mbtiles-server/compare/1.1.3...3.4.1) (2024-08-15)

### 🐛 修复 bug

-   替换 sqlit3 的依赖，使其能支持高版本 Nodejs,修复了 GetCapabilitiesRESTful 接口的 bug ([4657fca](https://github.com/feihu1024/node-mbtiles-server/commit/4657fca00f309585386802adffcd28020d0c1fb7))
-   修改了默认模式（xyz）下瓦片参数 xyz 的顺序 ([5accf5a](https://github.com/feihu1024/node-mbtiles-server/commit/5accf5aaedbdd120e08672a3881a0a88d76c8dbc))

## 3.1.0 - 2017-07-26

-   Add watch files as an option
-   Server does not restart automatically if `watch` is not provided

## 3.0.0 - 2017-07-05

-   Update `mbtiles-offline` to version 3
-   Support lastest versions of Electron

## 2.3.0 - 2017-06-27

-   Add SQLite support for NodeJS 8
-   Update Dockerfile
-   Add environment variables to configuration
-   Add favicon to server

## 2.2.0 - 2017-06-15

-   Add Mercator Bounding Box WMTS
-   No need to restart server to access new MBTiles

## 2.1.0 - 2017-06-12

-   ~Enforce Strict WMTS GetCapabilities & GetTile rules for KVP requests~

## 2.0.0 - 2017-06-03

-   Add Docker instructions
-   Add Benchmark reults (1K requests => 2.5s)
-   Restart server if file changes
-   Refactored library to use EventEmitters
-   Dropped background service support in favor of Docker

## 1.11.0 - 2017-05-04

-   Refactored WMTS & MBTiles routes

## 1.10.0 - 2017-04-06

-   Change default `domain` to `127.0.0.1` (less chances of proxy errors vs. using `localhost`)

## 1.9.0 - 2017-03-30

-   Add config store `conf`
-   Update options `start()`

## 1.7.0 - 2017-02-13

-   Add options to windows service (start/stop/restart)
-   Add Docker build instructions

## 1.6.0 - 2017-02-10

-   Run background services for Windows/MacOS/Linux
-   Upgrade WMTS schema (ESRI wasn't compatible)

## 1.5.1 - 2017-02-06

-   Add Typescript definition
-   Upgrade mbtiles-offline

## 1.4.0 - 2017-02-01

-   Added KVP support for request Tile 1.0.0
-   Updated WMTS capabilites with extra metadata

## 1.3.0 - 2017-01-10

-   Major refactoring
-   Improve CLI using `meow`
-   Update dependencies (including `mbtiles-offline`)

## 1.2.0 - 2016-12-5

-   Add Metadata in utils
-   Replace dev dependencies to Jest

## 1.1.1 - 2016-11-03

-   Add default export for Typescript

## 1.1.0 - 2016-11-01

-   Add MBTiles Metadata route

## 1.0.1 - 2016-10-31

-   Add WMTS library
-   First functional release

## 0.1.0 - 2016-10-26

-   Project initialized
