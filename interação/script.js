let slides =  document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');    
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');    
}

setInterval(next, 4000);

function inicializar() {
    var coordenadas = {lat: -22.912869, lng: -43.228963};

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: coordenadas 
    });

    var marker = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Meu marcador'
    });
  }