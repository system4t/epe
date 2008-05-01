// If W3C inheritance is enabled
if (document.createEventObject && window.EPE && EPE.ENABLE_W3C_INHERITANCE) {
  // Create inheritance from native JS Object
  // Custom EPE Object object
  EPE.Object =
    function() {
    };
  
  // Save ref. to native Object
  EPE._Object = Object;
  
  // Replace with EPE Object
  Object = EPE.Object;
  
  // When pseudo object.prototype is updated this function is run
  EPE.updateObject =
    function() {
      // Copy to real Object constructor
      EPE._Object.prototype[event.propertyName] = event.srcElement[event.propertyName];
      // If HTMLCollecations are enabled
      if (EPE.ENABLE_W3C_INHERITANCE) {
        // Copy to HTMLCollection constructor
        HTMLCollection.prototype[event.propertyName] = event.srcElement[event.propertyName];
      }
      // Copy to HTMLElement prototype
      HTMLElement.prototype[event.propertyName] = event.srcElement[event.propertyName];
    };
  
  // Make pseudo object.prototype live and listen for updates
  Object.prototype = EPE.IECreateElement('epe');
  document.documentElement.childNodes[0].appendChild(Object.prototype);
  Object.prototype.attachEvent('onpropertychange',EPE.updateObject);
}