/*@JSLDoc
EPE namespace declaration
*/
window.EPE = {};

/*@JSLDoc
Save native createElement method
*/
EPE.IECreateElement = document.createElement;

window.attachEvent('onload',
  function() {
    var c = document.getElementsByTagName('*');
    var l = c.length;
    for(var i=0; i<l; i++) {
      var t = c[i].nodeName.toLowerCase();
      EPE.extend(t, EPE.tags[t] ? EPE.tags[t] : HTMLElement);
    }
  }
);