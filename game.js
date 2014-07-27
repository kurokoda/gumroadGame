Game = {
    moveInterval: undefined,
    updateInterval: undefined,
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    manifest: {},
    letterID: 0,
    shuttle: undefined,


    start: function () {
        Game.shuttle = $('#shuttle')
        Game.moveInterval = setInterval(Game.moveLetters, 100);
        Game.updateInterval = setInterval(Game.update, 1000);
    },

    update: function () {
        if (Game.shuttle[0].childElementCount == 10) {
            Game.end();
            return;
        }
        Game.addLetter();
    },

    moveLetters: function () {
        Game.shuttle.css({
            'left': '+=10px'
        });
    },

    evaluateUserInput: function (character) {
        if (Game.manifest[character]) {
            var elementToRemoveID = '#letter_' + Game.manifest[character].shift();
            $(elementToRemoveID).remove();
            console.log(elementToRemoveID);
        }
    },

    addLetter: function () {
        var letter =  Game.alphabet[Math.floor(Math.random() * Game.alphabet.length)];
        Game.letterID++;
        Game.manifest[letter] ? Game.manifest[letter].push(Game.letterID) : Game.manifest[letter] = [Game.letterID];
        Game.shuttle.prepend("<div class = letter id = letter_" + Game.letterID + ">" + letter + "</div>");
        Game.shuttle.css({left: '0px'});
    },

    end: function () {
        clearInterval(Game.moveInterval);
        clearInterval(Game.updateInterval);
    }
};