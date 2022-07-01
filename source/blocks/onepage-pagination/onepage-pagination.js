const v = require(`${__dirname}/../../JS-components/variables.js`)
window.jQuery(document).ready(function(){
  let selectorOfChoosenElement = v.selectorOfChoosenElement;
  window.jQuery(selectorOfChoosenElement).onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    loop: true,
    beforeMove: setPaginationNumber,
  });
  setPaginationNumber(1);//В самом начале вызываем эту функцию, чтобы она выставила правильное значение пагинации.

  function setPaginationNumber(index){
    $(`.onepage-pagination>li>a>p`).remove();
    $(`.onepage-pagination>li:nth-child(${index})>a`).append(`<p>${Math.floor(index/10)}${index%10}</p>`);
  }

});
