// Let EPE execute this function on load.

if (document.createEventObject) {
  
  EPE.init.aux.push(
    function extendCSSStyleObject() {
      var a = document.styleSheets;
      var aL = a.length;
      // For each stylesheet
      for(var i=0; i<aL; i++)
        new CSSStyleSheet(document.styleSheets[i]);
    }
  );
  
  // Extend a native IE stylesheet, s, to support
  // W3C CSSStyleSheet and CSSStyleRule objects.
  // It is not possible to overwrite document.styleSheets
  // so we have to extend instead.
  function CSSStyleSheet(s) {
    s.constructor = this.constructor;
    s.cssRules = [];
    var l = s.rules.length;
    var k = 0;
    for(var i=0; i<l; i++) {
      if (s.rules[i])
        s.cssRules[k++] = new CSSStyleRule(s.rules[i]);
    }
    // Copy prototype functions ti native IE stylesheet
    for(var p in this.constructor.prototype)
      s[p] = this.constructor.prototype[p];
  }
  
  // Delete a rule from the stylesheet based on index
  // *Only* delete from the end of the stylesheet
  CSSStyleSheet.prototype.deleteRule =
    function(i) {
      this.removeRule(i);
    };
  
  // Add a rule to the stylesheet based on index
  // *Only* add to the end of the stylesheet
  CSSStyleSheet.prototype.insertRule =
    function(r,i) {
      if (i >= this.rules.length)
        i = -1;
      // Split rule in selector and CSS
      var tmp = r.split('{');
      tmp[1] = tmp[1].replace(/\}\s*/,'');
      // If selector has a comma then we need to write the classes individually
      if (/,/.test(tmp[0])) {
        var sel = tmp[0].split(/\s*,\s*/);
        for(var i=0; i<sel.length; i++)
          this.addRule(sel[i],tmp[1],-1);
      }
      else 
      this.addRule(tmp[0],tmp[1],-1);
    };
  
  // Object for single CSS class
  function CSSStyleRule(r) {
    this.selectorText = r.selectorText;
    this.style = r.style;
    this.cssText = r.selectorText + ' { ' + this.style.cssText + ' } ';
  }
}