# Basic TypeScript + Express Server :cake:

Basic TypeScript + Express server where you can create, read, update, delete (CRUD). Give me something harder @tambykojak.

## Getting Started

### Prerequisites

You should have installed:

- Node.js

### Installing

Once Node.js is installed, open up a fresh directory where your project will live and create initialize npm:

```
npm init
```

When prompted to create the package.json file, you can leave everything blank **except** for your **entry point**. Make sure your entry point is "server.js", not the default "index.js".

After that, install these packages:

```
npm i --save express body-parser
npm i --save-dev typescript ts-node nodemon @types/express @types/node
```

Now we have to initalize our tsconfig.json:

```
tsc --init
```

In our file, make sure to copy and paste this in there:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "pretty": true,
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./lib"
  },
  "include": ["lib/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Deployment

To run the app:

```
npm run dev
```

## Built With

- [Visual Studio Code](https://code.visualstudio.com/) - code editor
- [Postman](https://www.getpostman.com/) - API client

## Acknowledgments

- [Traversy Media - TypeScript Setup With Node & Express](https://www.youtube.com/watch?v=zRo2tvQpus8)
- [Alexandre Rousseau - Building an API with TypeScript, Express.js and Sequelize](http://rousseau-alexandre.fr/en/programming/2019/06/19/express-typescript.html)
