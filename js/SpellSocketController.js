var Elements = Elements || {};

Elements.SpellSocketController = function (options) {

    let that = {},
        elementPool = options.elementPool,
        spell = options.spell,
        spellView = options.view,
        currentElement;

    function init() {
        spellView.addEventListener("mouseup",function(event) {
            if(event.target.classList.contains("select")) {
                let selectedElement = event.target.classList[0];
                console.log(selectedElement);
                updateSpell(selectedElement);
            }
        });
    }

    function updateSpellMultiplierView() {
        let spellMultiplierViews = spellView.querySelectorAll(".select");

        elementPool.forEach(function (element) {
            spellMultiplierViews.forEach(function (multiplierView) {
                if (multiplierView.classList.contains(element.name)){
                    multiplierView.classList.remove("hidden");
                } else {
                    multiplierView.classList.add("hidden");
                }
            });
        })
    }

    function updateSpell(element) {
        spellView.classList.remove(currentElement);
        spellView.classList.add(element);
        currentElement = element;

    }

    that.init = init;
    return that;
};