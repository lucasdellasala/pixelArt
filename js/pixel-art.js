var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

//Elementos DOM

$(document).ready(function () {

  //Generando paleta de colores
  var $paleta = $('#paleta');
  

  for (i=0; i<nombreColores.length ; i++){
    $("<div></div>")
      .attr("class", "color-paleta")
      .css("background-color", nombreColores[i])
      .click(cambiarIndicador)
      .appendTo($paleta);
    }
    
  //Generando grilla de pixeles
  var $grillaPixeles = $('#grilla-pixeles');
  
  for (i=0; i<1751 ; i++){
    $('<div></div>')
      .attr("class", "div-coloreable")
      .click(cambiarColor)
      .appendTo($grillaPixeles);
  }

  //Cambio de indicador de color seleccionado con click
  var $indicador = $("#indicador-de-color");

  function cambiarIndicador(e){
    $indicador.css('background-color', $(e.target).css('background-color'));
  }  


  //Pintar grilla de pixeles
  function cambiarColor (e){
    $(e.target).css('background-color', $indicador.css('background-color'));
  }

  // Variable para guardar el elemento 'color-personalizado'
  var $colorPersonalizado = $('#color-personalizado');

  // // Es decir, el que se elige con la rueda de color.
  // $colorPersonalizado.change(function() {
  //   colorActual = $colorPersonalizado.css("background-color");
  //   $indicador.css("background-color", colorActual);
  // });

  $colorPersonalizado.addEventListener('change',
    (function() {
      // Se guarda el color de la rueda en colorActual
      colorActual = $colorPersonalizado.value;
      // Completar para que cambie el indicador-de-color al colorActual
      $indicador.style.backgroundColor = colorActual;
    })
  );
// //Mouse apretado o no

// var mouseApretado = false;

// grillaPixeles.addEventListener("mousedown", () => {mouseApretado=true; console.log(mouseApretado)});
// grillaPixeles.addEventListener("mouseup", () => {mouseApretado=false});

});