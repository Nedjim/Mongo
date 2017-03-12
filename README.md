# Fullstack Configuration

## Technology
- Express
- React.js
- Node.js
- Webpack
- MongoDB
- Mongoose
- Sass
- Heroku

## 1 - Installation manuelle
```
$ npm init
$ npm i --save express body-parser react react-dom react-router react-tap-event-plugin validator 
$ npm i --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react nodemon 
$ npm i -D style-loader css-loader sass-loader node-sass
```

## 2 - Arborescence

|  _ package.json  
|  _ webpack.config.js  
|  _ .env  
|  _ config.js  
|  _ Procfile  
|  _ .gitignore  
|  _ README.md  
|  _ index.js  
|  
|  _ _ server
|  
|  _ _ client    
|  
|  _ _ node_modules

 
#### Scripts

./package.json
```json
 "scripts": {
    "start": "node index.js",
    "start-dev": "nodemon --use_strict index.js",
    "postinstall": "npm run bundle",
    "bundle": "webpack",
    "bundle-dev": "webpack -w"
  }
```

#### Webpack

./webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),

  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          include: path.join(__dirname, '/client/src'),
          loader: 'babel-loader',
          query: {
            presets: ["react", "es2015"]
          }
      },
      {
          test: /\.s?css$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.join(__dirname, 'client/src')
      }
    ],
  },
};
```

#### Variables d'environnement
./.env
```
USER_DB=XXX
PASSWORD_DB=XXX
```
#### config.js

```js
const dotenv = require('dotenv').config();
module.exports = {
  'port': process.env.PORT || 3000,
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds123930.mlab.com:23930/kickass`
}
```

#### Procfile

```
web: node index.js
```


#### Gitignore

./.gitignore

```
node_modules
client/dist
npm-debug.log
.DS_Store
.env
```

#### Route express 

index.js

```js
const express = require('express');
const app = express();

const config = require('./config.js');

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.get('/', (req, res) => {
  res.send("Welcome to home page");
});

app.listen(config.port, () => {
  console.log('Server is running on http://localhost:3000 or ', config.port);
});

```
Créer les autres fichiers de l'arborescence.


## 3 - Execution
Sur deux consoles différentes, lancer les commandes suivantes:   
```
$ npm start
$ npm run bundle-dev
```

## 4 - Heroku
```
$ heroku create
$ heroku git:remote -a nom-du-repo-heroku
// aller dans le dashboard : relier à github
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ git push heroku master
$ heroku open
```