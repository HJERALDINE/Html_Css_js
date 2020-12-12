var usuario = document.getElementById ("usu1");
var contraseña = document.getElementById ("cont1");
const validar ={
    usuario_1 : "hjeraldine@hotmail.com",
    contraseña_1 : "1234"
}

function valide() {
    console.log ("Ingresando...");

    if(usuario.value === null || usuario.value === "") {
        alert ("Ingrese Usuario");
    }

    if(contraseña.value === null || contraseña.value === "") {
        alert ("Ingrese su contraseña");
    }

    if ((usuario.value == "hjeraldine@hotmail.com") && (contraseña.value == "1234")) {
        location.href="https://www.cinecolombia.com/bogota";   

    }
    return false;
}