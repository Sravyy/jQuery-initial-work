$(document).ready(function(){

  var vals = ['h1','img','p'];
  var tags= ['header', 'image', 'para']

  vals.forEach(function(val){
    $(val).click(function() {
    alert("this is a " + tags[vals.indexOf(val)])
    });
    // tags.forEach(function(tag){
    //
    // });
  });
  // $("h1").click(function() {
  // alert("This is a Header.");
  // });
  // $("img").click(function() {
  // alert("This is a img.");
  // });
  // $("p").click(function() {
  // alert("This is a p.");
  // });
});
