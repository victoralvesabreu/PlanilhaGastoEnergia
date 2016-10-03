var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  app.set("port", 3000);

  app.use(express.static("./views/public"));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.set("view engine", "pug");
  app.set("views", "./views");

  load("models")
    .then("controllers")
    .then("routes")
    .into(app);

    return app;
};
