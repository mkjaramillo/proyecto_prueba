function mostrarDatos(){
    
var info= "<b>  Nombre:</b> "+document.forms["f1"]["idNombre"].value;
var info1= "<b>Apellido:</b> "+document.forms["f1"]["idApellido1"].value;

var info2= "<b>Segundo Apellido:</b> "+document.forms["f1"]["idApellido2"].value;
var info3= "<b>Calle:</b> "+document.forms["f1"]["idCalle"].value;
var info4= "<b>Codigo Postal:</b> "+document.forms["f1"]["idCodigo"].value;
var info5= "<b>Municipio:</b> "+document.forms["f1"]["idMunicipio"].value;
var info6= "<b>Pais:</b> "+document.forms["f1"]["idPais"].value;
var info7= "<b>Provincia:</b> "+document.forms["f1"]["idProvincia"].value;
var info8= "<b>Email:</b> "+document.forms["f1"]["idCorreo"].value;
var info9="<b>Telefono Fijo :</b> "+ document.forms["f1"]["idFijo"].value;
var info10= "<b>Telefono Movil :</b> "+document.forms["f1"]["idMovil"].value;


const inform=[info,info1,info2,info3,info4,info5,info6,info7,info8,info9,info10]

for(let valor of inform){
    document.getElementById("n").innerHTML +=" "+valor+"<br/>";
    
}


}