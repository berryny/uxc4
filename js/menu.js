(function() {
  "use strict";
  /*
    "use strict"; Defines that JavaScript code should be executed in "strict mode".
    Not required but learn more at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  */
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dropdown-toggle').onclick = dropdownToogle;
  });

  function dropdownToogle(event) {
    event.preventDefault()
    var _this = this;
    console.log('Click Dropdown', this);

    _this.classList.toggle("toggled-on");

    var p = _this.parentElement;
    console.log("p",p);
    console.log(".nextSibling",p.nextSibling.nextSibling);

    p.nextSibling.nextSibling.classList.toggle("toggled-on")
    console.log("getAttribute",_this.getAttribute("aria-expanded"));

    /*
    	Terse ifs are condition statements
    	? is true
    	: is false
    	https://stackoverflow.com/questions/29043135/javascript-one-line-if-else-else-if-statement/34860002
    */
    var expanded = _this.getAttribute("aria-expanded")
    expanded === "false"
    	? "true"
    	: "false"

    console.log('_this.innerHTML',_this.innerHTML);
    var getSpan = _this.innerHTML;
    console.log('getSpan',getSpan);
    getSpan === '<span class="sr-text">Expand child menu</span>'
    ? '<span class="sr-text">Collapse child menu</span>'
    : '<span class="sr-text">Expand child menu</span>'
  }
})(); // the end!
