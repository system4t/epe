// HTMLElement.removeAttribute correction for IE
// 'coords' attribute of A and AREA tags can not be removed
// No known fix.
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.removeAttribute =
    function(a) {
      a = a.toLowerCase();
      // Remove event handlers.
      // Attribute 'coords' is set to the empty string instead of being removed
      if (/^on/.test(a) || a == 'coords')
        this[a] = null;
      else
        return this._removeAttribute(a);
    };
    // Define PlugIn for all elements
  EPE.PlugIn.RemoveAttribute = new EPE.PlugIn();
  EPE.PlugIn.RemoveAttribute.addEPEListener('create',function(){this._removeAttribute = this.removeAttribute; this.removeAttribute = EPE.removeAttribute;});
}
