// Map IE opacity to W3C opacity
if (document.createEventObject) {
  EPE.PlugIn.CssOpacity = new EPE.PlugIn();
  EPE.PlugIn.CssOpacity.addEPEListener('attach',
    function() {
      if (this.style.opacity)
        this.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + (parseFloat(this.style.opacity) * 100) + ')';
    }
  );
  
  EPE.PlugIn.CssOpacity.addEPEListener('change',
    function(e) {
      if (e.propertyName == 'style.cssFloat')
        this.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + (parseFloat(this.style.opacity) * 100) + ')';
    }
  );
}