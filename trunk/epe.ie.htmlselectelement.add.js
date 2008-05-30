// W3C compliant implementation of HTMLSelectElement.add method for IE
if (document.createEventObject && window.EPE) {
  HTMLSelectElement.prototype.add =
    function(newOption, beforeOption) {
      if (beforeOption) {
        var c = this.options;
        var l = c.length;
        var i=0;
        // Find the option we are looking for
        for(i=0; i<l; i++) {
          if (c[i] == beforeOption)
            break;
        }
        if (i < l) {
          // When found move succeeding options 1 up
          for(var j=l; j>i; j--)
            c[j] = new Option(c[j-1].text,c[j-1].value,c[j-1].defaultSelected,c[j-1].selected);
          c[i] = newOption;
        }
        else {
          var ex = new Error("Element not found.");
          ex.code = 8;
          throw ex;
        }
      }
      else
        this.options[this.options.length] = newOption;
    };
}
