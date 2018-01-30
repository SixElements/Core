var Elements = Elements || {};

Elements.ElementPoolView = function (options) {

    let that = {},
        poolView = options.view;

    function init(pool) {
        for (let element in pool) {
            if (pool.hasOwnProperty(element)) {
                let node = document.createElement("span");
                node.dataset.element = element;
                node.innerHTML = pool[element];
                poolView.appendChild(node);
            }
        }
    }

    function updateElement(element, count) {
        poolView.querySelector("[data-element="+element+"]").innerHTML = count;
    }

    function decrementElement(element) {
        let multiplier = poolView.querySelector("[data-element="+element.data+"]");
        multiplier.innerHTML = multiplier.innerHTML*1 -1;
    }

    function incrementElement(element) {
        let multiplier = poolView.querySelector("[data-element="+element.data+"]");
        multiplier.innerHTML = multiplier.innerHTML*1 +1;
    }


    that.init = init;
    that.updateElement = updateElement;
    that.decrementElement = decrementElement;
    that.incrementElement = incrementElement;
    return that;
};