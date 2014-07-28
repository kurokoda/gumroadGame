Model = {
    init: function () {
        Model.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        Model.accelerateTrigger = 20;
        Model.manifest = {};
        Model.score = 0;
        Model.letterID = 0;
        Model.updateTime = 1000;
    },

    addLetter: function (character) {
        Model.letterID++;
        Model.manifest[character] ? Model.manifest[character].push(Model.letterID) : Model.manifest[character] = [Model.letterID];
    },

    accelerate: function () {
        Model.updateTime *= 0.9;
    },

    getIdForCharacter: function (character) {
        var result;
        if (Model.manifest[character]) {
            result = Model.manifest[character].shift();
            Model.manifest[character].length == 0 && delete Model.manifest[character];
            Model.score++;
        }
        else {
            result = false;
            Model.score--;
        }
        return result;
    },

    doIncreaseDifficulty: function(){
        if(Model.score > 0 && Model.score % Model.accelerateTrigger == 0)
        {
            Model.accelerate()
            return true;
        }
        return false;
    }

}
