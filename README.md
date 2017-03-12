# Fullstack Configuration

## 1 - Technology
- Express
- React.js
- Node.js
- Webpack
- MongoDB
- Mongoose
- Material UI
- Sass
- Heroku

## 2 - Execution
Sur deux consoles différentes, lancer les commandes suivantes:   
```
$ npm start
$ npm run bundle-dev
```

## 3 - Heroku
```
$ heroku create
$ heroku git:remote -a nom-du-repo-heroku
// aller dans le dashboard : relier à github
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ git push heroku master
$ heroku open
```