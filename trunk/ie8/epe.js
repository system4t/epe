/*@JSLDoc
EPE namespace declaration
*/
window.EPE = {};

EPE.IECreateElement = document.createElement;

document.createElement =
  function(t) {
    var elm = EPE.IECreateElement(t);
    elm.hasOwnProperty = EPE.hasOwnProperty;
    return elm;    
  };

EPE.hasOwnProperty =
  function(p) {
    if (p != 'hasOwnProperty')
      return Object.prototype.hasOwnProperty.call(this, p);
    else
      return false;
  };

/*@JSLDoc
Save native createElement method
*/
HTMLElement = Element;
