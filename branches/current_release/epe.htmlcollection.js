// If HTMLCollections are enabled
if (document.createEventObject && windw.EPE && EPE.ENABLE_W3C_COLLECTION) {
  /**
  * HTMLCollection. A collection of element.
  * @param a {Array} A native IE collection. Not really an array but behaves like one.
  * @constructor
  */
  function HTMLCollection(a) {
    var l = a.length;
    for(var i=0; i<l; i++)
      this[i] = a[i];
    this.length = a.length;
  }
  
  HTMLCollection._prototype = HTMLCollection.prototype;

  EPE.updateHTMLCollection =
    function() {
      //alert(event.srcElement[event.propertyName]);
      HTMLCollection._prototype[event.propertyName] = event.srcElement[event.propertyName];
    };
  /*
  // Make pseudo object.prototype live and listen for updates
  HTMLCollection.prototype = EPE.IECreateElement('epe');
  HTMLCollection.prototype.constructor = HTMLCollection;
  document.documentElement.childNodes[0].appendChild(HTMLCollection.prototype);
  HTMLCollection.prototype.attachEvent('onpropertychange',EPE.updateHTMLCollection);
  a change for merge tesing
  */
}