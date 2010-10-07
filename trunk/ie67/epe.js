/*@JSLDoc
EPE namespace declaration
*/
window.EPE = {};

/*@JSLDoc
Save native createElement method
*/
EPE.IECreateElement = document.createElement;

EPE.hasOwnProperty =
  function(p) {
    if (p != 'hasOwnProperty')
      return Object.prototype.hasOwnProperty.call(this, p);
    else
      return false;
  };
