const v = require(`./../../JS-components/variables.js`)
window.jQuery(document).ready(function(){
  let selectorOfChoosenElement = v.selectorOfChoosenElement;
  $( ".main-screen__link-down" ).click(function() {
    window.jQuery(selectorOfChoosenElement).moveDown();
  })
})