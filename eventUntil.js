/**
 * Created by root on 17-6-9.
 */
(function () {
  EventUntil = {
    addHandler: function (element,type,handler) {
        if (element.addEventListener) {
          element.addEventListener(type,handler)
        } else if (element.attachEvent) {
          element.attachEvent('on' + type,handler)
        } else {
          element['on' + type] = handler
        }
    },

    getEvent: function(event) {
      return event || window.event
    },

    getTarget: function(event) {
      return event.target ||event.srcElement
    },

    preventDefault: function(event) {
      event.preventDefault || (event.returnValue = false);
    },

    stopProgration: function(event) {
      event.stopProgration || (event.cancelBubble = true);
    },

    getWheelDelta: function(event){
      return event.wheelDelta || -event.detail*40
    },

    removeHandler: function(element,type,handler){
      element.removeEventListener(type,handler) ||
        element.detachEvent('on'+type,handler) ||
      (element['on'+type] = null);
    }
  }
})();
