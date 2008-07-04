// Correct implementation of COLGROUP and COL element and behavior in FF, OP and SF

var EPE = {};

EPE.FFCorrectTableColElement =
  function() {
    var tables = document.getElementsByTagName('table');
    var colgroups = null;
    var m = 0;
    var offset = 0;
    var attr = {};
    var l = tables.length;
    // For each table
    for(var i=0; i<l; i++) {
      // Get colgroups in table
      colgroups = tables[i].getElementsByTagName('colgroup');
      // For each colgroup in table
      m = colgroups.length;
      offset = 0;
      for(var j=0; j<m; j++) {
        // If span attribute is not defined default to 1
        var span = colgroups[j].span ? colgroups[j].span : 1;
        attr.width = colgroups[j].width;
        attr.align = colgroups[j].align;
        attr.vAlign = colgroups[j].vAlign;
        attr.cssText = colgroups[j].style.cssText;
        tables[i].applyColgroup(offset,span,attr);
        offset += span;
      }
    }
  };

HTMLTableElement.prototype.applyColgroup =
  function(offset,span,obj) {
    var l = this.rows.length;
    var m = offset + span;
    obj.cssText = obj.cssText.replace(/-(\S)/g,function($0,$1){return $1.toUpperCase()});
    var tmp = obj.cssText.split(';');
    var tmp2 = null;
    var style2 = {};
    for(var i=0; i<tmp.length; i++) {
      tmp2 = tmp[i].split(':');
      if (!/^\s*$/.test(tmp2[0]))
        style2[tmp2[0].replace(/\s*/,'')] = tmp2[1];
    }
    for(var i=0; i<l; i++) {
      for(var j=offset; j<m; j++) {
        for(var p in obj)
          this.rows[i].cells[j][p] = obj[p];
        for(var p in style2) {
          if (!this.rows[i].cells[j].style[p])
            this.rows[i].cells[j].style[p] = style2[p];
        }
      }
    }
  };

window.addEventListener('load', EPE.FFCorrectTableColElement, true);