var moveInterval = undefined;
var updateInterval = undefined;

$(document).ready(function () {
    moveInterval = setInterval(moveLetters, 100);
    updateInterval = setInterval(updateLetters, 1000);
});

$(document).keydown(function (e) {
    evaluateUserInput(e.keyCode);
});


function updateLetters(){

}

function moveLetters(){

}

function moveLetters(){

}
