# Basic TypeScript + Express Server :cake:

Basic TypeScript + Express server where you can create, read, update, delete (CRUD).

## Getting Started :memo:

### Prerequisites

You should have installed:

- [Node.js](https://nodejs.org/)
- API Client (I'm using [Postman](https://www.getpostman.com/))

### Installing

Once Node.js is installed, install these packages:

```
npm i --save express body-parser
npm i --save-dev typescript ts-node nodemon @types/express @types/node
```

Finally clone the repository and your all set.

### Demo

To demo the app, run your server:
```
npm run dev
```

It should be running on localhost:3000. Open up localhost:3000/nodes on your browser.

After, open up Postman and create a POST method with the following JSON:
```
{
  "name": "john"
}
```

Run that HTTP request. If you refresh the page, you'll now see your JSON object.

## Deployment :rocket:

To run the app:

```
npm run dev
```

## Built With :hammer:

- [Visual Studio Code](https://code.visualstudio.com/) - code editor
- [Postman](https://www.getpostman.com/) - API client

## Acknowledgments :clap:

- [Traversy Media - TypeScript Setup With Node & Express](https://www.youtube.com/watch?v=zRo2tvQpus8)
- [Alexandre Rousseau - Building an API with TypeScript, Express.js and Sequelize](http://rousseau-alexandre.fr/en/programming/2019/06/19/express-typescript.html)
