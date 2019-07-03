var api = 'AIzaSyBZS6mVgEicOWphLeeBDL8to7gux9a9scQ';
 
function initMap() {
    var latLng = {
        lat: 20.6772885,
        lng:-103.3856328
    };

var map = new google.maps.Map(document.getElementById('mapa'), {
    'center': latLng,
    'zoom': 14,
    'mapTypeId': google.maps.MapTypeId.ROADMAP
  });

var contenido='<h2>GDLWEBCAM</h2>'+
                '<p>Del 10 al 12 de Diciembre</p>'+
                '<p>Visitanos!</p>'

var informacion = new google.maps.InfoWindow({
    content: contenido
});






var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    tittle:'GLDWEBCAMP'
});

marker.addListener('click', function(){
    informacion.open(map, marker);
});
}




$(function(){
    
//lettering
    
$('.nombre-sitio').lettering();
// agregar clase a menu

$('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
$('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
$('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');
$('body.reservaciones .navegacion-principal a:contains("Reservaciones")').addClass('activo');
//menu fijo

var windowHeight = $(window).height();
var barraAltura = $('.barra').innerHeight();


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > windowHeight) {
        $('.barra').addClass('fixed');
        $('body').css({'margin-top':barraAltura + 'px'});
    }else {
        $('.barra').removeClass('fixed');
        $('body').css({'margin-top':'0px'});
    }
});

//Menu Responsive

$('.menu-movil').on('click', function(){
    $('.navegacion-principal').slideToggle();
});











    //programa de conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });

//animaciones para los numeros

    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 600);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);


//animacion cuenta regresiva

$('.cuenta-regresiva').countdown('2018/12/03 09:00:00', function(event){
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
});

//colorbox
$('.invitado-info').colorbox({inline:true, width:"50%"});
$('.boton_newsletter').colorbox({inline:true, width:"50%"});
});