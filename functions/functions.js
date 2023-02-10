var coordinates, url;

document.getElementById("map").onclick, function(){
    coordinates = $('#coordinates').val();
    url         = "https://www.google.com.sa/maps/search/"+ coordinates +",12.21z?hl=en";
  
    window.open(url, '_blank');
  };