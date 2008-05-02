// HTMLElement.removeAttribute correction for IE
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.removeAttribute =
    function(a) {
      a = a.toLowerCase();
      if (/^on/.test(a))
        this[a] = null;
      else
        return this._removeAttribute(a);
    };
    // Define PlugIn for all elements
  EPE.PlugIn.RemoveAttribute = new EPE.PlugIn();
  EPE.PlugIn.RemoveAttribute.addEPEListener('create',function(){this._removeAttribute = this.removeAttribute; this.removeAttribute = EPE.removeAttribute;});
}
