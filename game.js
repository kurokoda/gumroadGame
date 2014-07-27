Game = {
    moveInterval: undefined,
    updateInterval: undefined,
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    activeLetters: "",

    start: function () {
        Game.activeLetters = "";
        Game.moveInterval = setInterval(Game.moveLetters, 100);
        Game.updateInterval = setInterval(Game.update, 1000);
    },

    update: function () {
        Game.activeLetters = Game.getRandomLetter() + Game.activeLetters;
        $('#shuttle').text(Game.activeLetters);
        $('#shuttle').css({left: '0px'});
        if (Game.activeLetters.length == 10) {
            Game.end();
        }
    },

    moveLetters: function () {
        $('#shuttle').css({
            'left': '+=10px'
        });
    },

    evaluateUserInput: function (keyCode) {

    },

    getRandomLetter: function () {
        return Game.alphabet[Math.floor(Math.random() * Game.alphabet.length)];
    },

    end: function () {
        clearInterval(Game.moveInterval);
        clearInterval(Game.updateInterval);
    }
};