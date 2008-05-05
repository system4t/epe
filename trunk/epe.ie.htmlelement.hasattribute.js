// HTMLElement.hasAttribute
// Implemented natively in IE 8 beta
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.hasAttribute =
    function(a) {
      // IE reads 'specified' property wrong for event handlers
      if (/^on/.test(a))
        return this[a] && this[a].constructor == Function ? true : false;
      return this.getAttributeNode(a).specified;
    };
  EPE.PlugIn.HasAttribute = new EPE.PlugIn();
  EPE.PlugIn.HasAttribute.addEPEListener('create',function(){this._hasAttribute = this.hasAttribute; this.hasAttribute = EPE.hasAttribute;});
}
