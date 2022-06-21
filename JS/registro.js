function sacarTexto(){
    document.getElementById("registro").innerHTML="hola"+" " +localStorage.getItem("nombre");
    inicializar();
 }
 function cambiarImagen(){
    var valorSRC = document.getElementById('imagen').src;
    if (valorSRC.match('../IMG/h1.gif')) {
        valorSRC = "../IMG/hola-hello.gif";
        console.log(valorSRC);
    } else if(valorSRC.match('../IMG/hola-hello.gif')) {
        valorSRC = '../IMG/saludo-hola.gif';
        console.log(valorSRC);
    }else{
        valorSRC = '../IMG/h1.gif'; 
    }
    document.getElementById('imagen').src = valorSRC;
 }
 function listaImagen(){
    const imagen = ["../IMG/hola-hello.gif",'../IMG/saludo-hola.gif' , '../IMG/h1.gif'];
   var r= Math.floor(Math.random() * imagen.length);
   document.getElementById('imagen').src=imagen[r];
 }
 var mascotas;

 function inicializar(){
    const foto1 = { nombre: "gato", url: "../IMG/gato.png"};
    const foto2={nombre:"perro",url:"../IMG/perro.jpg"};
    const imagen = [foto1,foto2 ];
    var r= Math.floor(Math.random() * imagen.length);
    mascotas=imagen[r]
    document.getElementById('imagen2').src=mascotas.url;
    document.getElementById('imagen2').style.filter="contrast(20%)";
 }
 function listaImagen2(elemento){
  
  
   if( mascotas.nombre==elemento){
  document.getElementById("mensaje").innerHTML="GANASTE"
  document.getElementById('imagen2').style.filter="contrast(20%)";

   }else{
    document.getElementById("mensaje").innerHTML="PERDIO"
    document.getElementById('imagen2').style.filter="contrast(20%)";
   }
 
 }