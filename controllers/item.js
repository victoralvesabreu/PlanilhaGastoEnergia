var itens = require('../models/itens');

module.exports = function(app){
  var controller = {};
  var id = 0;
  controller.getAdicionarItem = function(req, res){

    res.render("item", {title : "Adicionar Item"});
  };

  controller.adicionarItem = function(req, res){
    itens.push({_id: id,
                nome: req.body["nome"],
                watts: req.body["watts"],
                tempo: req.body["tempo"],
                custo: req.body["custo"],
                gastoTotal: ((req.body["watts"] * req.body["tempo"]).toPrecision() * req.body["custo"]).toPrecision()});
    id++;
    res.redirect("/");
  };

  return controller;
};
