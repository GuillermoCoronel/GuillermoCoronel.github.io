function encriptar(){
    var texto = document.getElementById("texto").value.toLowerCase(); //convierte en minúscula
    var textoEncriptado = texto.replaceAll("e","enter");
    textoEncriptado = textoEncriptado.replaceAll("o","ober");
    textoEncriptado = textoEncriptado.replaceAll("i","imes");
    textoEncriptado = textoEncriptado.replaceAll("a","ai");
    textoEncriptado = textoEncriptado.replaceAll("u","ufat");

    document.getElementById("doll").style.display = "none";
    document.getElementById("sinmensaje").style.display = "none";
    document.getElementById("ingresa").style.display = "none";
    
    document.getElementById("textodesencriptado").innerHTML = textoEncriptado; 
    document.getElementById("textodesencriptado").style.display = "flex";  
    document.getElementById("boton3").style.display = "show";
    document.getElementById("boton3").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("texto").value.toLowerCase(); //convierte en minúscula
    var textoDesencriptado = texto.replaceAll("enter","e");
    textoDesencriptado = textoDesencriptado.replaceAll("ober","o");
    textoDesencriptado = textoDesencriptado.replaceAll("imes","i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai","a");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat","u");

    document.getElementById("doll").style.display = "none";
    document.getElementById("sinmensaje").style.display = "none";
    document.getElementById("ingresa").style.display = "none";
    
    document.getElementById("textodesencriptado").innerHTML = textoDesencriptado; 
    document.getElementById("textodesencriptado").style.display = "flex";  
    document.getElementById("boton3").style.display = "show";
    document.getElementById("boton3").style.display = "inherit";

}

function copiar(){
    var textoCopiado = document.querySelector('#textodesencriptado');
    textoCopiado.select();
    document.execCommand("copy");

}