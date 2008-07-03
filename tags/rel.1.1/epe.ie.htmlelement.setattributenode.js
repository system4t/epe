// HTMLElement.setAttributeNode correction for IE

// Define new EPE replacement function
EPE.setAttributeNode =
  function(n) {
    if (n.nodeName == 'style' || /^on/.test(n.nodeName))
      this.setAttribute(n.nodeName, n.nodeValue);
    else
      this._setAttributeNode(n);
  };
EPE.PlugIn.SetAttributeNode = new EPE.PlugIn();
EPE.PlugIn.SetAttributeNode.addEPEListener('create',function(){this._setAttributeNode = this.setAttributeNode; this.setAttributeNode = EPE.setAttributeNode;});
