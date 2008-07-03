// Map IE styleFloat to W3C cssFloat

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