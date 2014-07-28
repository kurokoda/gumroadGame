$(document).ready(function () {

    Controller.start();

    $(document).keydown(function (e) {
        if (e.keyCode == 27)
        {
            Controller.start();
            return;
        }
        Controller.evaluateUserInput(String.fromCharCode(e.keyCode).toLowerCase());
    });
});



