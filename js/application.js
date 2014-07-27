$(document).ready(function () {
    Game.start();
});

$(document).keyup(function (e) {
    if (e.keyCode == 27)
    {
        Game.start();
    }
    Game.evaluateUserInput(String.fromCharCode(event.keyCode).toLowerCase());
});


