var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var activeLetters = "";

var moveInterval = undefined;
var updateInterval = undefined;

$(document).ready(function () {
    moveInterval = setInterval(Game.moveLetters, 100);
    updateInterval = setInterval(Game.updateLetters, 1000);
});

$(document).keydown(function (e) {
    Game.evaluateUserInput(e.keyCode);
});


