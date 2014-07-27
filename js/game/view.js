View = {

    init: function () {
        View.shuttleElement = $('#shuttle');
        View.scoreElement = $('#score');
        View.shuttleElement.empty();
        View.setScore(0);
    },

    addLetter: function (letter, letterID) {
        View.shuttleElement.prepend("<div class = letter id = letter_" + letterID + ">" + letter + "</div>");
        View.shuttleElement.css({left: '0px'});
    },

    remove: function (selectedElement) {
        $(selectedElement).remove();
    },

    animate: function () {
        View.shuttleElement.css({
            'left': '+=10px'
        });
    },

    containsMaxChars: function () {
        return View.shuttleElement[0].childElementCount == 9;
    },

    setScore: function (score) {
        View.scoreElement.text('Score: ' + score)
    },

    end: function () {
        View.shuttleElement.empty();
        var letters = ['r', 'e', 'v', 'o', ' ', 'e', 'm', 'a', 'g', ' '];
        for (var i = 0; i < letters.length; i++) {
            View.shuttleElement.prepend("<div class = 'letter'>" + letters[i] + "</div>");
        }
        View.shuttleElement.css({left: '100px'});
    }
};
