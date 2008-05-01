// Override IE native setAttribute
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.setAttribute =
    function(a,v) {
      a = a.toLowerCase();
      if (a == 'style') {
        // Split string on ';'
        var s = v.split(';');
        var p = null;
        for(var i=0; i<s.length; i++) {
          p = s[i].split(':');
          this.style[p[0]] = p[1];
        }
        return;
      }
      else if (a == 'class')
        a = 'className';
      else if (a == 'for')
        a = 'htmlFor';
      this._setAttribute(a,v);
    };

  // Define PlugIn for all elements
  EPE.PlugIn.SetAttribute = new EPE.PlugIn();
  EPE.PlugIn.SetAttribute.addEPEListener('create',function(){this._setAttribute = this.setAttribute; this.setAttribute = EPE.setAttribute;});
}
