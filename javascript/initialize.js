window.onload = function() {
  var views = new US.States.Views()
  var controller = new US.States.Controller(views)

  controller.initialize(views)
};
