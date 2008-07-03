// HTMLElement.removeAttribute correction for IE
// 'coords' attribute of A and AREA tags can not be removed
// No known fix. Setting it explicitely to null doesn't work

// Define new EPE replacement function
EPE.removeAttribute =
  function(a) {
    a = a.toLowerCase();
    // Remove event handlers.
    if (/^on/.test(a))
      this[a] = null;
    else
      return this._removeAttribute(a);
  };
  // Define PlugIn for all elements
EPE.PlugIn.RemoveAttribute = new EPE.PlugIn();
EPE.PlugIn.RemoveAttribute.addEPEListener(
  'create',
  function() {
    // Can't assign to element.removeAttribute when tag is OBJECT or APPLET
    // No workaround.
    if (!(this.constructor == HTMLObjectElement || this.constructor == HTMLAppletElement)) {
      this._removeAttribute = this.removeAttribute;
      this.removeAttribute = EPE.removeAttribute;
    }
  }
);
