var Elements = Elements || {};

Elements.SpellSocketView = function (options) {

    let that = {},
        spellView = options.view;

    function toggleAvailableMultiplierVisibility(element, state) {
        console.log(element);
        let spellMultiplierView = spellView.querySelector(".select[data-element='"+element+"']");
        spellMultiplierView.classList.toggle("hidden", state);
    }

    function disableMultiplier(element) {
        toggleAvailableMultiplierVisibility(element.data, true)
    }

    function enableMultiplier(element) {
        toggleAvailableMultiplierVisibility(element.data, false)

    }

    function updateSpell(element) {
        spellView.dataset.element = element;
    }

    function getViewNode() {
        return spellView;
    }

    function getElement() {
        return spellView.dataset.element;
    }

    that.disableMultiplier = disableMultiplier;
    that.enableMultiplier = enableMultiplier;
    that.updateSpell = updateSpell;
    that.getViewNode = getViewNode;
    that.getElement = getElement;
    return that;
};