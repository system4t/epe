// HTMLElement.getAttribute correction for IE
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  HTMLElement.prototype.getAttribute =
    function(a) {
      a = a.toLowerCase();
      if (a == 'style') {
        var s = this.style.cssText.toLowerCase();
        return s.charAt(s.length - 1) != ';' ? s + ';' : s;
      }
      return this.getAttributeNode(a).nodeValue;
    };
}
