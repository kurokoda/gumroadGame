Controller = {

    start: function () {
        Model.init();
        View.init();
        Controller.resetIntervals();
    },

    evaluateUserInput: function (character) {
        var characterID = Model.getIdForCharacter(character)
        if (characterID) {
            View.remove(characterID);
            if (Model.doIncreaseDifficulty()) {
                Controller.resetIntervals();
            }
        }
        View.setScore(Model.score);
    },

    addLetter: function (character) {
        Model.addLetter(character);
        View.addLetter(character, Model.letterID);
    },

    update: function () {
        View.containsMaxChars() ? Controller.end() : Controller.addLetter(Model.alphabet[Math.floor(Math.random() * Model.alphabet.length)]);
    },

    resetIntervals: function () {
        Controller.clearIntervals();
        Controller.moveInterval = setInterval(View.animate, Model.updateTime / 10);
        Controller.updateInterval = setInterval(this.update, Model.updateTime);
    },

    clearIntervals: function () {
        clearInterval(Controller.moveInterval);
        clearInterval(Controller.updateInterval);
    },

    end: function () {
        Controller.clearIntervals();
        View.end();
    }
};