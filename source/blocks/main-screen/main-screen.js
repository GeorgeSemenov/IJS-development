window.onload = function() {
  console.log(`start testing`);
  if (window.jQuery) {  
      // jQuery is loaded  
      alert("Yeah!");
  } else {
      // jQuery is not loaded
      alert("Doesn't Work");
  }
}
$(document).ready(function(){
})
