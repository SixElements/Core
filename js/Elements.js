var Elements = (function () {
    let that = {};

    function init() {
        let spell = 1,
            elements = ["fire", "water", "earth", "air", "growth", "decay"],
            spellAController = new Elements.SpellSocketController({
                elementPool: elements,
                spell: spell,
                view: document.querySelector("#spell3")
            }),
            spellBController = new Elements.SpellSocketController({
                elementPool: elements,
                spell: spell,
                view: document.querySelector("#spell4")
            }),
            spellCController = new Elements.SpellSocketController({
                elementPool: elements,
                spell: spell,
                view: document.querySelector("#spell5")
            });
        spellAController.init();
        spellBController.init();
        spellCController.init();
    }

    that.init = init;
    return that;
}());