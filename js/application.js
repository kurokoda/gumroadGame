$(document).ready(function () {
    Controller.start();
});

$(document).keyup(function (e) {
    if (e.keyCode == 27)
    {
        Controller.start();
    }
    Controller.evaluateUserInput(String.fromCharCode(event.keyCode).toLowerCase());
});


