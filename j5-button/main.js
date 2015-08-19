var five = require("johnny-five"),
  board, button;

var request = require("request")

board = new five.Board();

var isUp = false

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
    request({
      method: "PUT",
      url: "http://192.168.1.13/api/2d12a9a434ddfc23b6df02f1f2ab81f/lights/3/state", json: { "on": isUp }
    })
    isUp = !isUp
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
  });
});
