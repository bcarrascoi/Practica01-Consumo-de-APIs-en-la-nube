/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


var datosepisodio = [];
function cargarDatos(){
    let res = document.querySelector('#tablaEpisodioDetalle');
    res.innerHTML = '';
    for(let vector of Object.values(datosepisodio)){  
        for(var i=0; i < vector.length; i++){
            res.innerHTML +=
            `<tr class="row justify-content-center">
                <td class="col text-center">${vector[i].name}</td>
                <td class="col text-center">${vector[i].air_date}</td>
                <td class="col text-center">${vector[i].episode}</td>
                <td class="col text-center">${vector[i].url}</td>
                <td class="col text-center">${vector[i].created}</td>
                </tr>
            `
        }
    }
}
function cargarDatosEpisodio(){
    //var url = 'https://rickandmortyapi.com/api/episode';
    var APi = new XMLHttpRequest();
    APi.open('GET', 'https://rickandmortyapi.com/api/episode', true);
    APi.send();
    APi.onreadystatechange = function(){
        if (this.status == 200 && this.readyState ==4){
            datosepisodio = JSON.parse(this.responseText);
        }
    }
}

function funcionFiltrado(){
  var input;
  var filtro;
  var tabla;
  var auxiliar1;
  var auxiliar2;
  var i;
  input= document.getElementById("myInput");
  filtro = input.value.toUpperCase();
  tabla = document.getElementById("myTable");
  auxiliar1 = tabla.getElementsByTagName("tr");

  for(i=0; i<auxiliar1.length; i++){
    auxiliar2 = auxiliar1[i].getElementsByTagName("td")[0];
    if(auxiliar2){
      if(auxiliar2.innerHTML.toUpperCase().indexOf(filtro) > -1) {
        auxiliar1[i].style.display = "";
      }else {
        auxiliar1[i].style.display = "none";
      }
    }
  }
}
