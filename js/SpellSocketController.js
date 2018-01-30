var Elements = Elements || {};

Elements.SpellSocketController = function (options) {

    let that = new EventPublisher(),
        elementPool = options.elementPool,
        spell = options.spell,
        spellViews = options.views,
        poolView = options.poolView;

    function init() {
        initPool();
        initViews();
    }

    function initPool() {
        poolView.init(elementPool.getPool());
        that.addEventListener("elementAddedToPool", elementPool.add);
        that.addEventListener("elementRemovedFromPool", elementPool.remove);
        that.addEventListener("elementRemovedFromPool", poolView.decrementElement);
        that.addEventListener("elementAddedToPool", poolView.incrementElement);
    }

    function initViews() {
        spellViews.forEach(function (spellView) {
            spellView.getViewNode().addEventListener("mouseup", onMultiplierSelect.bind(undefined, spellView));
            that.addEventListener("elementAvailable", spellView.enableMultiplier);
            that.addEventListener("elementUnavailable", spellView.disableMultiplier)
        });
    }

    function onMultiplierSelect(spellView, event) {
        if (event.target.classList.contains("select")) {
            let selectedElement = event.target.dataset.element,
                previousElement = spellView.getElement();

            console.log(previousElement, selectedElement);
            updateSpell(spellView, previousElement, selectedElement);
        }
    }

    function updateElementPool(previousElement, element) {

        if (previousElement !== "") {
            if (elementPool.getCount(previousElement) === 0) {
                console.log("re-enabling element " + previousElement);
                that.notifyAll("elementAvailable", previousElement);
            }
            that.notifyAll("elementAddedToPool", previousElement);
        }

        that.notifyAll("elementRemovedFromPool", element);
        if (elementPool.getCount(element) === 0) {
            that.notifyAll("elementUnavailable", element);
        }

    }

    function updateSpell(spellView, previousElement, element) {
        console.log("selected element: " + element + ", count: " + elementPool.getCount(element));
        if (elementPool.getCount(element) > 0) {
            spellView.updateSpell(element);
            updateElementPool(previousElement, element);
        }
    }

    that.init = init;
    return that;
};