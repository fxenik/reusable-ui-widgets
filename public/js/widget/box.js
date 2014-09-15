define("widget/box", ["knockout", "html!widget/box.html", "css!widget/box"], function(ko, html) {
  ko.templates["widget/box"] = html;

  function Box(title, content) {
    var self = this;
    self.title = ko.observable(title);
    self.content = ko.observable(content);

    var styles = [
      [ "black", "green", "white" ],
      [ "white", "black", "silver" ]
    ];

    self.style = ko.observable(0);
    self.color = ko.observable(styles[0][0]);
    self.background = ko.observable(styles[1][0]);

    self.changeColor = function() {
      var style = (self.style() + 1) % styles[0].length;
      console.log(style);
      self.color(styles[0][style]);
      self.background(styles[1][style]);
      self.style(style);
    }
  }

  return Box;
});
