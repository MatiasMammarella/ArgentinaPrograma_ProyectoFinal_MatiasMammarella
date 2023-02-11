function extrainfo(url){
  let win = window.open(url, '_blank');
   win.focus();
 }

function GoogleMaps() {
  extrainfo("https://www.google.com.ar/maps/place/San+Mart%C3%ADn,+Provincia+de+Buenos+Aires/@-34.5759934,-58.5462005,15z/data=!3m1!4b1!4m6!3m5!1s0x95bcb77160243783:0x5e21a2d3c0a65957!8m2!3d-34.5757521!4d-58.5370965!16s%2Fm%2F03c_642");
}

function GoogleMail() {
  extrainfo("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rodrigogomez@gmail.com");
}


function likedin(){
  extrainfo("https://www.linkedin.com/school/programa-argentina/")
}

function twitter(){
  extrainfo("https://mobile.twitter.com/argprograma")
}

function facebook(){
  extrainfo("https://www.facebook.com/profile.php?id=100084956654182")
}

function school(){
  extrainfo("https://www.jingenieros.esc.edu.ar/")
}



