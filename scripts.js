
$(function(){
    'use strict';
    
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');
    
    $('.servicios nav a').on('click' , mostrarTabs);

    function mostrarTabs(){
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').hide();
        $(enlace).show();

        return false;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
  $('main').on({
      click: function(){
        $(this).addClass('fondorojo activo');
        },mouseenter: function(){
            $(this).addClass('fondorojo');
      },mouseleave: function(){
            $(this).addClass('activo');
      }
  });
  $('main article:first img').on('click', function(){
            $(this).attr('src' , 'img/imagen:2.jpg');
  });

  $('navegacion').show();
  $('logo img').css({'width': '400px'});
  $('main article h2').css({'color': '#db008d'});
  $('aside').css({'background-color': '#e1e1e1',
  'text-transform':'uppercase' , 'padding': '20px'
});
$('.navegacion ul li a').on('mouseenter', cambiarColor );
function cambiarColor(){
    $('.navegacion').css('background-color' ,'red');
}

$('.logo img').on('click', function(){
    $(this).animate({'width': '200px'} , 1000 );
});
  
 $('main article img').on('mouseenter', aumentarImagen);
 $('main article img').on('mouseleave', disminuirImagen);
 
 function aumentarImagen(){
     $(this).animate({'width': '100%'});
 }
 function disminuirImagen(){
    $(this).animate({'width': '350px'});
}
  
  
  
    /*$('main article:first').hide();*/
    /*var copia= $('main article:last').clone();
    //mover al final
    $('main').append(copia);
    //mover al inicio de elemento padre
    $('main').prepend(copia);
    */
   /*
   var copia = $ ('main article:last').clone();
   $(copia).prependTo('main');
*/
/*
    $('div.logo img').on('click',function(){
        console.log("has hecho click en el logo");
    });
*/
/*
$('div.logo img').on('click', function(){
    $(this).remove();
});
*/
/*
$('div.logo img').on('mouseenter', function(){
    console.log("sobre el logo");

}); 
$('div.logo img').on('mouseleave', function(){
    console.log("fuera de el logo");
*/
/*
$('#menu') .on('click', function(){
    $('#navegacion') .show();
});
*/
/*
$('div.logo img').addClass('activo');

$('.navegacion').show();
$('.navegacion nav ul li:first').addClass('activo');

$('.navegacion ul li a').on('click', function(e){
 $('.navegacion ul li a').removeClass('activo');   
e.preventDefault();
$(this).addClass('activo');
});
*/
/*
$('.logo img').click(function(){
    $('main article:first').slideUp(1000);
});
$('aside').click(function(){
    $('main article:first').slideDown(1000);
});
*/
/*
var proximosViajes = ['Londres' , 'Valencia' , 'Madrid'];
    console.log(proximosViajes);
$.each(proximosViajes, function (i, v){
    if(i== 0){
        $('aside').append('<h2>Proximos Viajes<h2>');
    }
    $('aside').append('<li>' + v + '</li>');
});

var viajesPorFecha = {
    primero: 'Londres',
    segundo: 'Valencia',
    tercero: 'Madrid',
    cuarto: 'Paris',
    quinto: 'Milan',
};
console.log(viajesPorFecha);

$.each(viajesPorFecha, function(i ,v){
    $('aside').append('<li>' + i + '-' + v + '<li>');
});
*/












});
