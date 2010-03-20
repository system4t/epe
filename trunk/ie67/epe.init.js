/*@JSLDoc
EPE namespace declaration
*/
EPE.init =
  function() {
    // Get all elements in document
    var c = document.getElementsByTagName('*');
    var l = c.length;
    // For each element
    for(var i=0; i<l; i++) {
      // For lookup in EPE.tags
      var t = c[i].nodeName.toLowerCase();
      // Extend element
      EPE.extend(c[i], EPE.tags[t] ? EPE.tags[t] : HTMLElement);
    }
  };
