// Override IE native setAttribute
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.setAttribute =
    function(a,v) {
      a = a.toLowerCase();
      if (a == 'style') {
        // Fixes a lot of issues regarding comparison of style attributes
        this.style.cssText = v;
        /* Old code before I realized cssText was not read-only but read/write 
        // Split string on ';'
        var s = v.split(';');
        var p = null;
        var tmp = "setting style\n";
        tmp += "before split: " + v + "\n";
        for(var i=0; i<s.length; i++) {
          tmp += "before split: " + s[i] + "\n";
          // If style has trailing ; then s[s.length-1] = ''
          if (s[i]) {
            p = s[i].split(':');
            // The style value must be trimmed as IE remembers redundant whitespace.
            // Without trimming wierd style properties like ' border' (leading whitespace)
            // may occur.
            this.style[p[0].replace(/^\s+|(\s+(?!\S))/g,"")] = p[1].replace(/^\s+|(\s+(?!\S))/g,"");
          }
        }
        alert(tmp);
        */
        return;
      }
      // If event handler set attribute as property. This will invoke
      // UEM event handling if UEM is loaded
      else if (/^on/.test(a)) {
        // Create new anonymous function with v as body
        this[a] = new Function(v);
        return;
      }
      // accesskey *must* be accessKey
      else if (/^accesskey/i.test(a))
        a = 'accessKey';
      else if (a == 'class')
        a = 'className';
      else if (a == 'for')
        a = 'htmlFor';
      // Default behavior is to use native method
      this._setAttribute(a,v);
    };

  // Define PlugIn for all elements
  EPE.PlugIn.SetAttribute = new EPE.PlugIn();
  EPE.PlugIn.SetAttribute.addEPEListener('create',function(){this._setAttribute = this.setAttribute; this.setAttribute = EPE.setAttribute;});
}
