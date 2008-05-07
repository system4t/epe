// HTMLElement.hasAttributes for IE
if (document.createEventObject && window.EPE) {
  /**
   * THIS FUNCTION IS BROKEN  
   * Replacement for the native cloneNode method. Clones a node
   * and optionally all childnodes and adds them to the EPE cache.
   * 
   * @param deep Set to true to clone child nodes as well.
   */
  EPE.cloneNode =
    function(deep) {
      var elm = this._cloneNode(deep);
      // Chache new node (and possible child nodes) if enabled by user
      if (EPE.CACHE_ELEMENTS)
        EPE.cache.addRecursive(elm);
      return elm;
    };
  EPE.PlugIn.CloneNode = new EPE.PlugIn();
  EPE.PlugIn.CloneNode.addEPEListener('create',function(){this._cloneNode = this.cloneNode; this.cloneNode = EPE.cloneNode;});
}
