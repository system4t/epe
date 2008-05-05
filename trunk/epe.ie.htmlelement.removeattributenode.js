// HTMLElement.removeAttributeNode correction for IE
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.removeAttributeNode =
    function(n) {
      return this.removeAttribute(n.nodeName);
    };
  EPE.PlugIn.RemoveAttributeNode = new EPE.PlugIn();
  EPE.PlugIn.RemoveAttributeNode.addEPEListener('create',function(){this._removeAttributeNode = this.removeAttributeNode; this.removeAttributeNode = EPE.removeAttributeNode;});
}
