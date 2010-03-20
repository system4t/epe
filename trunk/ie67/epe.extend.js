EPE.extend =
  function(elm, con) {
    elm.constructor = con;
    var pr = HTMLElement.prototype;
    for(var p in pr)
      elm[p] = pr[p];
    if (con != HTMLElement) {
      pr = con.prototype;
      for(var p in pr)
        elm[p] = pr[p];
    }
    return elm;
  };
