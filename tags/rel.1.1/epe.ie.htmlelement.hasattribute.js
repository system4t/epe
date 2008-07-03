// HTMLElement.hasAttribute

// Implemented natively in IE 8 beta
// Define new EPE replacement function
HTMLElement.prototype.hasAttribute =
  function(a) {
    // IE reads 'specified' property wrong for event handlers
    if (/^on/.test(a))
      return this[a] && this[a].constructor == Function ? true : false;
    return this.getAttributeNode(a).specified;
  };
