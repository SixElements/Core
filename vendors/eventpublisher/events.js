(function(context) {
  "use strict";

  context.EventPublisher = context.EventPublisher || function() {
    this.listeners = {};
  };

  context.EventPublisher.prototype.addEventListener = function(event,
    listener) {
    if (this.listeners[event] === undefined) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  };

  context.EventPublisher.prototype.removeEventListener = function(event,
    listener) {
    let index;
    if (this.listeners[event] === undefined) {
      return;
    }
    index = this.listeners[event].indexOf(listener);
    if (index > -1) {
      this.listeners[event].splice(index, 1);
    }
  };

  context.EventPublisher.prototype.notifyAll = function(event, data) {
    let i;
    if (this.listeners[event] === undefined) {
      return;
    }
      for (i = 0; i < this.listeners[event].length; i++) {
          this.listeners[event][i]({
              target: this,
              data: data,
          });
      }

  };

}(window));
