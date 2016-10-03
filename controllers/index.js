var itens = require('../models/itens');

module.exports = function(app){
  var controller = {};

  controller.getIndex = function(req, res){
    var aux = 0;
    itens.forEach(function(item){
      aux += parseFloat(item.gastoTotal);
    });
    res.render("index", {title : "Planilha de Gasto de Energia", item: itens, total: aux});
  };
  return controller;
};
