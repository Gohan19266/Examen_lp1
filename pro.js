var bigproduct=[];
function guardar(){
    var Nro=document.getElementById("idnumero").value;
    var name=document.getElementById("idnombre").value;
    var Dni=document.getElementById("iddni").value;
    var Ubicacion=document.getElementById("idubicacion").value;
    var objproduct={
        producto_Nro :Nro,
        producto_name: name,
        producto_DNI : Dni ,
        producto_ubicacion : Ubicacion,
    }
}
