// Override IE native hasAttribute
// Implemented natively in IE 8 beta
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  // If no non-expando attributes have specified = true then element has no attributes
  EPE.hasAttributes =
    function() {
      var a = this.attributes;
      var l = a.length;
      for (var i=0; i<l; i++) {
        if (!a.item(i).expando && a.item(i).specified)
          return true;
      }
      return false;
    };

  // Define PlugIn for all elements
  EPE.PlugIn.HasAttributes = new EPE.PlugIn();
  EPE.PlugIn.HasAttributes.addEPEListener('create',function(){this.hasAttributes = EPE.hasAttributes;});
}
