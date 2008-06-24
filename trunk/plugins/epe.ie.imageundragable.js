// Disable the default behavior when dragging an image.
// Useful if you're using drag'n'drop.

EPE.PlugIn.ImgUndragable = new EPE.PlugIn('img');
EPE.PlugIn.ImgUndragable.addEPEListener('create',
  function() {
    // Bypass UEM
    this.attachEvent('ondragstart', function(){event.returnValue = false;});
  }
);