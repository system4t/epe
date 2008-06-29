// Disable the default behavior when dragging an image.
// Useful if you're using drag'n'drop.

EPE.PlugIn.CssFloat = new EPE.PlugIn();
EPE.PlugIn.CssFloat.addEPEListener('attach',
  function() {
    if (this.style.opacity)
      this.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + (parseFloat(this.style.opacity) * 100) + ')';
  }
);

EPE.PlugIn.CssFloat.addEPEListener('change',
  function(e) {
    if (e.propertyName == 'style.cssFloat')
      this.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + (parseFloat(this.style.opacity) * 100) + ')';
  }
);