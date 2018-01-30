var Elements = (function () {
    let that = {};

    function init() {
        let spell = 1,
            elementPool = new Elements.ElementPool({
                pool: {
                    "fire": 6,
                    "water": 6,
                    "earth": 3,
                    "air": 1,
                    "growth": 2,
                    "decay": 1
                }
            }),
            poolView = new Elements.ElementPoolView({view: document.querySelector(".element-pool")}),
            spellSocketViews = [
                new Elements.SpellSocketView({view: document.querySelector("#spell3")}),
                new Elements.SpellSocketView({view: document.querySelector("#spell4")}),
                new Elements.SpellSocketView({view: document.querySelector("#spell5")})
            ],
            spellAController = new Elements.SpellSocketController({
                elementPool: elementPool,
                spell: spell,
                views: spellSocketViews,
                poolView: poolView
            });
        spellAController.init();
    }

    that.init = init;
    return that;
}());