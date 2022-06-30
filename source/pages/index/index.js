import './index.scss';
import '../../JS-components/libs.js';

import '../../blocks/main-screen/main-screen.js';

window.jQuery(document).ready(function(){
  window.jQuery(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    loop: true
  });
});
