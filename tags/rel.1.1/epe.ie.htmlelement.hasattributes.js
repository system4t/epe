// HTMLElement.hasAttributes for IE

// Define new EPE replacement function
// If no non-expando attributes have specified = true then element has no attributes
HTMLElement.prototype.hasAttributes =
  function() {
    var a = this.attributes;
    var l = a.length;
    for (var i=0; i<l; i++) {
      if (!a.item(i).expando && a.item(i).specified)
        return true;
    }
    return false;
  };
