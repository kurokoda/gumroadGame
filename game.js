Game = {
    updateLetters: function () {
        var letter = this.getRandomLetter();
        activeLetters = letter + activeLetters;
        $('#shuttle').text(activeLetters);
    },

    moveLetters: function () {

    },

    evaluateUserInput: function (keyCode) {

    },

    getRandomLetter: function () {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

};