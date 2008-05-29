/*
// HTMLElement.removeAttributeNode correction for IE
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  HTMLElement.prototype.removeAttributeNode =
    function(n) {
      return this.removeAttribute(n.nodeName);
    };
}
*/
// HTMLElement.removeAttributeNode correction for IE
// Doesn't work on OBJECT tags as you can't assign to element.removeAttribute
// nor element.removeAttributeNode
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.removeAttributeNode =
    function(n) {
      return this.removeAttribute(n.nodeName);
    };
    // Define PlugIn for all elements
  EPE.PlugIn.RemoveAttribute = new EPE.PlugIn();
  EPE.PlugIn.RemoveAttribute.addEPEListener(
    'create',
    function() {
      // Can't assign to element.removeAttribute when tag is OBJECT or APPLET
      // No workaround.
      if (!(this.constructor == HTMLObjectElement || this.constructor == HTMLAppletElement)) {
        this._removeAttributeNode = this.removeAttributeNode;
        this.removeAttributeNode = EPE.removeAttributeNode;
      }
    }
  );
}
