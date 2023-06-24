$(document).ready(function(){  
  var headerFile = "header.html";
  var navFile = "navigation.html";
  
  if( $("#header").text().length) {
    headerFile = $("#header").text();
  }
  
  if( $("#navigation").text().length) {
    navFile = $("#navigation").text();
  }
  
  $("#header").load("/layout/" + headerFile);
  $("#navigation").load("/layout/" + navFile);
  $("#footer").load("/layout/footer.html");
})