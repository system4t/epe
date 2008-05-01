if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.getAttribute =
    function(a) {
      a = a.toLowerCase();
      if (a == 'style') {
        var s = this.style.cssText.toLowerCase();
        return s.charAt(s.length - 1) != ';' ? s + ';' : s;
      }
      else if (a == 'class')
        a = 'className';
      else if (a == 'for')
        a = 'htmlFor';
      return this._getAttribute(a);
    };

  // Define PlugIn for all elements
  EPE.PlugIn.GetAttribute = new EPE.PlugIn();
  EPE.PlugIn.GetAttribute.addEPEListener('create',function(){this._getAttribute = this.getAttribute; this.getAttribute = EPE.getAttribute;});
}
