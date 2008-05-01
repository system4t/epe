if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.getAttribute =
    function(a) {
      if (a.toLowerCase() != 'style')
        return this._getAttribute(a);
      else {
        var s = this.style.cssText.toLowerCase();
        return s.charAt(s.length - 1) != ';' ? s + ';' : s;
      }
    };

  // Define PlugIn for all elements
  EPE.PlugIn.GetAttribute = new EPE.PlugIn();
  EPE.PlugIn.GetAttribute.addEPEListener('create',function(){this._getAttribute = this.getAttribute; this.getAttribute = EPE.getAttribute;});
}
