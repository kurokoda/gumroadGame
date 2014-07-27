Game = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    manifest: {},
    letterID: 0,
    score: 0,
    updateTime: 1000,
    accelerateTrigger: 20,
    moveInterval: undefined,
    updateInterval: undefined,
    shuttleElement: undefined,
    scoreElement: undefined,

    start: function () {
        Game.shuttleElement = $('#shuttle');
        Game.scoreElement = $('#score');
        this.setIntervals();
    },

    update: function () {
        if (Game.shuttleElement[0].childElementCount == 9) {
            Game.end();
            return;
        }
        Game.addLetter(Game.alphabet[Math.floor(Math.random() * Game.alphabet.length)]);
    },

    animate: function () {
        Game.shuttleElement.css({
            'left': '+=10px'
        });
    },

    accelerate: function () {
        Game.updateTime *= 0.9;
        Game.clearIntervals();
        Game.setIntervals();
        console.log(Game.updateTime);
    },

    evaluateUserInput: function (character) {
        if (Game.alphabet.indexOf(character) == -1)
            return;
        if (Game.manifest[character]) {
            var selectedElement = '#letter_' + Game.manifest[character].shift();
            $(selectedElement).remove();
            Game.score++;
            if (Game.manifest[character].length == 0)
                delete Game.manifest[character];
            if (Game.score > 0 && Game.score % Game.accelerateTrigger == 0) {
                Game.accelerate();
            }
        }
        else {
            Game.score--;
        }
        Game.scoreElement.text('Score: ' + Game.score)
    },

    addLetter: function (letter) {
        Game.letterID++;
        Game.manifest[letter] ? Game.manifest[letter].push(Game.letterID) : Game.manifest[letter] = [Game.letterID];
        Game.shuttleElement.prepend("<div class = letter id = letter_" + Game.letterID + ">" + letter + "</div>");
        Game.shuttleElement.css({left: '0px'});
    },

    setIntervals: function () {
        Game.moveInterval = setInterval(Game.animate, Game.updateTime / 10);
        Game.updateInterval = setInterval(Game.update, Game.updateTime);
    },

    clearIntervals: function () {
        clearInterval(Game.moveInterval);
        clearInterval(Game.updateInterval);
    },

    end: function () {
        Game.clearIntervals();
        Game.shuttleElement.empty();
        var letters = ['r', 'e', 'v', 'o', ' ', 'e', 'm', 'a', 'g', ' '];
        for (var i = 0; i < letters.length; i++) {
            Game.shuttleElement.prepend("<div class = 'letter'>" + letters[i] + "</div>");
        }
        Game.shuttleElement.css({left: '100px'});
    }
};