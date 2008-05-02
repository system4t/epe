// HTMLElement.hasAttribute
// Implemented natively in IE 8 beta
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  HTMLElement.prototype.hasAttribute =
    function(a) {
      return this.getAttributeNode(a).specified;
    };
}
