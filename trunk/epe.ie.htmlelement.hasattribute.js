// Override IE native hasAttribute
// Implemented natively in IE 8 beta
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.hasAttribute =
    function(a) {
      return this.getAttributeNode(a).specified;
    };

  // Define PlugIn for all elements
  EPE.PlugIn.HasAttribute = new EPE.PlugIn();
  EPE.PlugIn.HasAttribute.addEPEListener('create',function(){this.hasAttribute = EPE.hasAttribute;});
}
