// Override IE native setAttribute

// Define new EPE replacement function
EPE.setAttribute =
  function(a,v) {
    a = a.toLowerCase();
    if (a == 'style') {
      // Fixes a lot of issues regarding comparison of style attributes
      this.style.cssText = v;
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
