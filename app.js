let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;
let NumeroMaximoDeIntentos = 5;

function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento(){
 let NumeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);
 
 if(NumeroDeUsuario === NumeroSecreto){
    AsignarTextoElemento("p",`Acertaste en ${Intentos} ${(Intentos == 1) ? `vez`: `veces`}!`); 
    document.getElementById("reiniciar").removeAttribute("disabled");
 } else {
    if (NumeroDeUsuario > NumeroSecreto){
        AsignarTextoElemento("p","Noup, es menor");
    } else {
        AsignarTextoElemento("p","Noup, es mayor");
    }
    Intentos++;
    LimpiarCaja();
 } 
 if(Intentos == NumeroMaximoDeIntentos){
    AsignarTextoElemento("p", "Llegaste al número máximo de intentos");
    ReiniciarJuego();
 }
 return;
} 

function CondicionesIniciales(){
    AsignarTextoElemento("h1","Juego del número secreto");
    AsignarTextoElemento("p",`Pon aquí un número del 1 al ${NumeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function LimpiarCaja(){
    document.querySelector("#ValorUsuario").value = " ";
}

function GenerarNumeroSecreto (){
   let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
   if (ListaNumerosSorteados.length == NumeroMaximo){
    AsignarTextoElemento("p","Ya te acabaste los numeros mijx");
   } else {
     if (ListaNumerosSorteados.includes(NumeroGenerado)) {
        return GenerarNumeroSecreto();
     } else {
        ListaNumerosSorteados.push(NumeroGenerado);
        return NumeroGenerado;
     }
}
}

function ReiniciarJuego () {
    //limpiar caja, mensaje de intervalos, generar nuevo numero, deshabilitar boton nuevo juego, iniciar el num intentos
    LimpiarCaja();
    CondicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

CondicionesIniciales();
