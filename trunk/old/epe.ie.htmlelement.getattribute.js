// HTMLElement.getAttribute correction for IE
// Note that the 'href' attribute is reported as
// an absolute URL in IE6+7 IF the attribute is specified
// whereas Mozilla aways reports the
// actual attribute value. This is not nessesarily wrong
// but impossible to work around as there are no means to
// tell when a href value is relative or absolute. See W3C
// specifications for more information
// W3C Anchor href attribute: http://www.w3.org/TR/html4/struct/links.html#adef-href
// W3C URI type definition: http://www.w3.org/TR/html4/types.html#type-uri
if (document.createEventObject && window.EPE) {
  // Define new EPE replacement function
  HTMLElement.prototype.getAttribute =
    function(a) {
      a = a.toLowerCase();
      // Style attribute is an object in IE6+7
      // so we need to expand it to a string
      if (a == 'style') {
        var s = this.style.cssText.toLowerCase();
        return s.charAt(s.length - 1) != ';' ? s + ';' : s;
      }
      else {
        a = this.getAttributeNode(a);
        return a ? a.nodeValue : null;
      }
    };
}
