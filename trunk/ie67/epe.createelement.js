/**
* Creates an element of the type specified by tag.  The element is wrapped
* within an instance of a subclass of HTMLElement.
* 
* @param tag {String} The HTML tag name of the element type to create.
* @returns a native element wrapped in an instance of HTMLElement.
* @type HTMLElement
*/
//EPE.createElement =
document.createElement =
  function(t) {
    t = t.toLowerCase();
    // Return an element wrapped in a proper [ELEMENT] constructor
    // If no constructor exists use HTMLElement.
    return EPE.tags[t] ? new EPE.tags[t](t) : new HTMLElement(t);
  };

// This assignment *must* come after the EPE.createElement declaration
//document.createElement = EPE.createElement;
