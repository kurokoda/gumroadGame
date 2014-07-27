$(document).ready(function () {
    Game.start();
});

$(document).keydown(function (e) {
    Game.evaluateUserInput(e.keyCode);
});


