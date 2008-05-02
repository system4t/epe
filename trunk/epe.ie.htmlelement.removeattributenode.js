// HTMLElement.removeAttributeNode correction for IE
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  HTMLElement.prototype.removeAttributeNode =
    function(n) {
      return this.removeAttribute(n.nodeName);
    };
}
