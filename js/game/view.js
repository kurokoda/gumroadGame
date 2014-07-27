View = {

    init: function () {
        View.shuttleElement = $('#shuttle');
        View.scoreElement = $('#score');
        View.shuttleElement.empty();
        View.setScore(0);
    },

    addLetter: function (character, characterID) {
        View.shuttleElement.prepend("<div class = letter id = character_" + characterID + ">" + character + "</div>");
        View.shuttleElement.css({left: '0px'});
    },

    remove: function (characterID) {
        $('#character_' + characterID).remove();
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
        var gameOverCharacters = ['r', 'e', 'v', 'o', ' ', 'e', 'm', 'a', 'g', ' '];
        for (var i = 0; i < gameOverCharacters.length; i++) {
            View.shuttleElement.prepend("<div class = 'letter'>" + gameOverCharacters[i] + "</div>");
        }
        View.shuttleElement.css({left: '100px'});
    }
};
