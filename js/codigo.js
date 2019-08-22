var dia = new Date();
var hora = dia.getHours();
function funcion(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var nombreentero = " " + nombre + " " + apellidos+".";
        if((hora>=0) && (hora<=12)){
            document.getElementById("resultado").innerHTML="Buenos días,"+nombreentero;
        }
        else if((hora>=12) && (hora<=20)){
            document.getElementById("resultado").innerHTML="Buenas tardes,"+nombreentero;}
        else{
            document.getElementById("resultado").innerHTML="Buenas noches,"+nombreentero;}
}