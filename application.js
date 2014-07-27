$(document).ready(function () {
    Game.start();
});

$(document).keydown(function () {
    Game.evaluateUserInput(String.fromCharCode(event.keyCode).toLowerCase());
});


