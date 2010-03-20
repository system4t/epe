// Disable the default behavior when dragging an image.
// Useful if you're using drag'n'drop.
if (document.createEventObject) {
  EPE.PlugIn.CssFloat = new EPE.PlugIn();
  EPE.PlugIn.CssFloat.addEPEListener('attach',
    function() {
      if (this.style.cssFloat)
        this.style.styleFloat = this.style.cssFloat;
    }
  );
  
  EPE.PlugIn.CssFloat.addEPEListener('change',
    function(e) {
      if (e.propertyName == 'style.cssFloat')
        this.style.styleFloat = this.style.cssFloat;
    }
  );
}