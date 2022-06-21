function mostrarTexto() {
    //el display: none, block
    var valorDisplay =  document.getElementById("idNombre").value;
    console.log(valorDisplay)
    document.getElementById("idNombre2").innerHTML = valorDisplay;
}
function sumar() {
    //el display: none, block
    var valor1 =  document.getElementById("idN1").value;
    var valor2 =  document.getElementById("idN2").value;
    var total=parseInt(valor1)+parseInt(valor2);
    console.log(total)
    document.getElementById("result").innerHTML = total;
}
function resta() {
    //el display: none, block
    var valor1 =  document.getElementById("idN1").value;
    var valor2 =  document.getElementById("idN2").value;
    var total=parseInt(valor1)-parseInt(valor2);
    console.log(total)
    document.getElementById("result").innerHTML = total;
}
function mult() {
    //el display: none, block
    var valor1 =  document.getElementById("idN1").value;
    var valor2 =  document.getElementById("idN2").value;
    var total=parseInt(valor1)*parseInt(valor2);
    console.log(total)
    document.getElementById("result").innerHTML = total;
}
function div() {
    //el display: none, block
    var valor1 =  document.getElementById("idN1").value;
    var valor2 =  document.getElementById("idN2").value;
    var total=parseInt(valor1)/parseInt(valor2);
    console.log(total)
    document.getElementById("result").innerHTML = total;
}
function validar(){
   if( document.getElementById("idNombre").value===""||document.getElementById("idCorreo").value===""||document.getElementById("idContrasenia").value===""){
    document.getElementById("errorcampo").innerHTML="todos los camppos son obligatorios";
    return false;
   }
}
function validar2(){
    var nombre=document.forms["n1"]["idNombre"].value;
    var correo=document.forms["n1"]["idCorreo"].value;
    var contra=document.forms["n1"]["idContrasenia"].value;
    if( nombre===""||correo===""||contra===""){
     document.getElementById("errorcampo").innerHTML="todos los camppos son obligatorios";
     return false;
    }else{
        localStorage.setItem("correo",correo);
        localStorage.setItem("nombre",nombre);
        localStorage.setItem("password",contra);
        sacarTexto();
       return true;
    }

   
 }
