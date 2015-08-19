var five = Meteor.npmRequire("johnny-five");
var board = new five.Board();

var led = null;
var isOn = false;

board.on("ready", function() {
  console.log("BOARD CONNECTED.");

  led = new five.Led(13);
});

Meteor.methods({
  sup: function () {
    if (isOn) {
      led.off()
    } else {
      led.on()
    }
    isOn = !isOn
  }
})
