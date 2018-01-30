var Elements = Elements || {};

Elements.ElementPool = function (options) {

    let that = {},
        elementPool = options.pool;

    function removeElement(element) {
        console.log("removing: " + element.data);
        elementPool[element.data]--;
    }

    function addElement(element) {
        console.log("adding: " + element.data);
        elementPool[element.data]++;
    }

    function getPool() {
        return elementPool;
    }

    function getCount(element) {
        return elementPool[element];
    }

    that.remove = removeElement;
    that.add = addElement;
    that.getPool = getPool;
    that.getCount = getCount;
    return that;
};