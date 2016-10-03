module.exports = function(app){
  controller = app.controllers.item;

  app.route("/adicionarItem")
    .get(controller.getAdicionarItem)
    .post(controller.adicionarItem);

};
