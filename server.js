var htpp = require('http');
var app = require('./config/express')();

htpp.createServer(app).listen(app.get("port"), function(){
  console.log("Express Server escutando na prota " + app.get("port"));
});
