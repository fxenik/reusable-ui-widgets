define("app/page-model", ["widget/box"], function(Box) {
  function Model() {
    var self = this;

    self.box1 = new Box("First Box", "Hello first box");
    self.box2 = new Box("Second Box", "Second box says hi!");
  }

  return Model;
})
