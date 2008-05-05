// HTMLElement.getAttribute correction for IE
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  EPE.getAttribute =
    function(a) {
      a = a.toLowerCase();
      if (a == 'style') {
        var s = this.style.cssText.toLowerCase();
        return s.charAt(s.length - 1) != ';' ? s + ';' : s;
      }
      return this.getAttributeNode(a).nodeValue;
    };
  EPE.PlugIn.GetAttribute = new EPE.PlugIn();
  EPE.PlugIn.GetAttribute.addEPEListener('create',function(){this._getAttribute = this.getAttribute; this.getAttribute = EPE.getAttribute;});
}
