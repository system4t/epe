// Override IE native setAttribute
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.setAttribute =
    function(a,v) {
      if (a.toLowerCase() != 'style')
        return this._setAttribute(a,v);
      else {
        // Split string on ';'
        var s = v.split(';');
        var p = null;
        for(var i=0; i<s.length; i++) {
          p = s[i].split(':');
          this.style[p[0]] = p[1];
        }
      }
    };

  // Define PlugIn for all elements
  EPE.PlugIn.SetAttribute = new EPE.PlugIn();
  EPE.PlugIn.SetAttribute.addEPEListener('create',function(){this._setAttribute = this.setAttribute; this.setAttribute = EPE.setAttribute;});
}
