// Tag to constructor name table
EPE.tags =
  {
    a: 'HTMLAnchorElement',
    applet: 'HTMLAppletElement',
    area: 'HTMLAreaElement',
    base: 'HTMLBaseElement',
    basefont: 'HTMLBaseFontElement',
    body: 'HTMLBodyElement',
    br: 'HTMLBRElement',
    button: 'HTMLButtonElement',
    caption: 'HTMLTableCaptionElement',
    col: 'HTMLTableColElement',
    del: 'HTMLModElement',
    dir: 'HTMLDirectoryElement',
    div: 'HTMLDivElement',
    dl: 'HTMLDListElement',
    em: 'HTMLSpanElement',  // Firefox extension.
    fieldset: 'HTMLFieldSetElement',
    font: 'HTMLFontElement',
    form: 'HTMLFormElement',
    frame: 'HTMLFrameElement',
    frameset: 'HTMLFrameSetElement',
    h1: 'HTMLHeadingElement',
    head: 'HTMLHeadElement',
    hr: 'HTMLHRElement',
    html: 'HTMLHtmlElement',
    iframe: 'HTMLIFrameElement',
    img: 'HTMLImageElement',
    input: 'HTMLInputElement',
    isindex: 'HTMLIsIndexElement',
    label: 'HTMLLabelElement',
    legend: 'HTMLLegendElement',
    li: 'HTMLLIElement',
    link: 'HTMLLinkElement',
    map: 'HTMLMapElement',
    menu: 'HTMLMenuElement',
    meta: 'HTMLMetaElement',
    object: 'HTMLObjectElement',
    ol: 'HTMLOListElement',
    optgroup: 'HTMLOptGroupElement',
    option: 'HTMLOptionElement',
    p: 'HTMLParagraphElement',
    param: 'HTMLParamElement',
    pre: 'HTMLPreElement',
    q: 'HTMLQuoteElement',
    select: 'HTMLSelectElement',
    script: 'HTMLScriptElement',
    style: 'HTMLStyleElement',
    table: 'HTMLTableElement',
    tbody: 'HTMLTableSectionElement',
    td: 'HTMLTableCellElement',
    textarea: 'HTMLTextAreaElement',
    title: 'HTMLTitleElement',
    tr: 'HTMLTableRowElement',
    ul: 'HTMLUListElement'
  };

// Create the function with 'if (!t) return' as the function is
// called for each HTML sub interface for inheritance
window.HTMLElement = new Function('t', 'if (!t) return; var elm = EPE.IECreateElement(t); EPE.extend(elm, arguments.callee); return elm;');
for(var p in EPE.tags) {
  if(EPE.tags[p].constructor == String) {
    window[EPE.tags[p]] = new Function('t', 'var elm = EPE.IECreateElement(t ? t : \'' + p + '\'); EPE.extend(elm, arguments.callee); return elm;');
    window[EPE.tags[p]].prototype = new HTMLElement();
    window[EPE.tags[p]].prototype.constructor = window[EPE.tags[p]];
    EPE.tags[p] = window[EPE.tags[p]];
  }
}

// Duplicated HTMLTableColElement
EPE.tags['colgroup'] = EPE.tags['col'];
// Duplicated HTMLHeadingElement
EPE.tags['h2'] = EPE.tags['h1'];
EPE.tags['h3'] = EPE.tags['h1'];
EPE.tags['h4'] = EPE.tags['h1'];
EPE.tags['h5'] = EPE.tags['h1'];
EPE.tags['h6'] = EPE.tags['h1'];
// Duplicated HTMLModElement
EPE.tags['ins'] = EPE.tags['del'];
// Duplicated HTMLSpanElement
EPE.tags['span'] = EPE.tags['em'];
EPE.tags['strike'] = EPE.tags['em'];
EPE.tags['strong'] = EPE.tags['em'];
// Duplicated HTMLTableSectionElement
EPE.tags['tfoot'] = EPE.tags['tbody'];
EPE.tags['thead'] = EPE.tags['tbody'];
// Duplicated HTMLTableCellElement
EPE.tags['th'] = EPE.tags['td'];
