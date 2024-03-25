# Home Library Service

## Description
Let's try to create a Home Library Service! Users can create, read, update, delete data about Artists, Tracks and Albums, add them to Favorites in their own Home Library!

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running docker containers

```
docker-compose up
```
After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/api/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.
## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

## Scan image vulnerabilities

```
npm run docker:scan
```
## Pull docker image from docker hub

```
docker pull klimf/home_library-api:latest
```
```
docker run -d --name my-container -p 4000:4000 klimf/home_library-api:latest
```
## Check user-defined bridge

```
docker network ls
```

```
docker network inspect home_library_app_network
```

## Check volumes

```
docker volume ls
```

## Auto-fix and format

```
npm run lint
```

```
npm run format
```

## Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
