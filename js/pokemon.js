let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 100
let vidasEnemigo = 100
let puntajeJugador = vidasJugador
let puntajeEnemigo = vidasEnemigo
let nombreChamanJugador = ""
let nombreChamanEnemigo = ""
 
// secciones 
let sectionPantallaDeCarga =document.getElementById("pantalla-inicio")
let seccionPantallaPresentacion = document.getElementById("pantalla-presentacion")
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let sectionPresentacionTotem = document.getElementById("pantalla-presentacion-totem")
let sectionPresentacionOponente = document.getElementById("pantalla-presentacion-oponente")
let sectionComienzaJuego = document.getElementById("comienza-juego")
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionBotonReiniciar = document.getElementById("reiniciar")

// botones 
let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")
let botonAire = document.getElementById("boton-aire")
let botonElectricidad = document.getElementById("boton-electricidad")
let botonVolverAtacar = document.getElementById("boton-volver-atacar")

//variables que muestran en la ui 
let spanChamanJugador = document.getElementById("mascota-jugador")
let spanVidasJugador = document.getElementById("vidas-jugador")
let spanVidasEnemigo = document.getElementById("vidas-enemigo")



function iniciarPantallaDeCarga (){

    sectionPantallaDeCarga.style.display = "block"
    seccionPantallaPresentacion.style.display = "none"
    sectionSeleccionarMascota.style.display = "none"
    sectionPresentacionTotem.style.display = "none"
    sectionPresentacionOponente.style.display = "none"
    sectionComienzaJuego.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionBotonReiniciar.style.display = "none"

    let botonPlay = document.getElementById("play")
    botonPlay.addEventListener("click", iniciarPantallaPresentacion)
}

function iniciarPantallaPresentacion (){

    sectionPantallaDeCarga.style.display = "none"
    seccionPantallaPresentacion.style.display = "block"
    sectionSeleccionarMascota.style.display = "none"
    sectionPresentacionTotem.style.display = "none"
    sectionPresentacionOponente.style.display = "none"
    sectionComienzaJuego.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionBotonReiniciar.style.display = "none"


    let botonComenzarjuego = document.getElementById("comenzar-juego")
    botonComenzarjuego.addEventListener("click", iniciarJuego)
}

function iniciarJuego(){

    seccionPantallaPresentacion.style.display = "none"
    sectionSeleccionarMascota.style.display = "block" 
    sectionSeleccionarAtaque.style.display = "none"  
    sectionBotonReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

   
}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = "none"  
    sectionSeleccionarAtaque.style.display = "block" 

    let inputRaganar = document.getElementById("Raganar")
    let inputNaia = document.getElementById("Naia")
    let inputKael = document.getElementById("Kael")
    let inputLira = document.getElementById("Lira")
    

   if(inputRaganar.checked){
        spanChamanJugador.innerHTML = "Raganar"
        nombreChamanJugador = "Raganar"
    } else if (inputNaia.checked){
        spanChamanJugador.innerHTML = "Naia"
        nombreChamanJugador ="Naia"
    }else if (inputKael.checked){
        spanChamanJugador.innerHTML = "Kael" 
        nombreChamanJugador = "Kael"  
    }else if (inputLira.checked){
        spanChamanJugador.innerHTML = "Lira"
        nombreChamanJugador = "Lira"   
    }else {
        alert("Tienes que seleccionar una mascota para poder continuar")
    }
    mostrarMascotaJugador()
 }

function mostrarMascotaJugador(){

    sectionPantallaDeCarga.style.display = "none"
    seccionPantallaPresentacion.style.display = "none"
    sectionSeleccionarMascota.style.display = "none"
    sectionPresentacionTotem.style.display = "block"
    sectionPresentacionOponente.style.display = "none"
    sectionComienzaJuego.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionBotonReiniciar.style.display = "none"

    let botonSiguientePresentacionTotem = document.getElementById("botton-siguiente-presentacion-totem")
    botonSiguientePresentacionTotem.addEventListener("click", seleccionarMascotaEnemigo)

}

function seleccionarMascotaEnemigo (){

    sectionPresentacionTotem.style.display = "none"
    sectionPresentacionOponente.style.display = "block"

    let mascotaAleatorio = aleatorio(1,4)
    let spanMascotaEnemigo = document.getElementById ("mascota-enemigo")

    if (mascotaAleatorio == 1 ){
        spanMascotaEnemigo.innerHTML = "Raganar"
        nombreChamanEnemigo = "Raganar"
    }else if (mascotaAleatorio == 2 ){
        spanMascotaEnemigo.innerHTML = "Naia"
        nombreChamanEnemigo = "Naia"
    }else if (mascotaAleatorio == 3 ){
        spanMascotaEnemigo.innerHTML = "Kael"
        nombreChamanEnemigo = "Kael"
    }else {
        spanMascotaEnemigo.innerHTML = "Lira"
        nombreChamanEnemigo = "Lira"
    }
    let botonComenzarAtaque = document.getElementById("boton-comenzar-ataque")
    botonComenzarAtaque.addEventListener("click", ataque)
 }
    
function ataque (){
    
    sectionPresentacionOponente.style.display = "none"
    sectionSeleccionarAtaque.style.display = "block"
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

     let botonAire = document.getElementById("boton-aire")
    botonAire.addEventListener("click", ataqueAire)

     let botonElectricidad = document.getElementById("boton-electricidad")
    botonElectricidad.addEventListener("click", ataqueElectricidad)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego )
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAire(){
    ataqueJugador = "Aire"
    ataqueAleatorioEnemigo()

}

function ataqueElectricidad(){
    ataqueJugador = "Electricidad"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
   
    let ataqueAleatorio = aleatorio(1,5)

    if (ataqueAleatorio == 1 ){
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2 ){
        ataqueEnemigo = "Agua"
    } else if (ataqueAleatorio == 3 ){
        ataqueEnemigo = "Tierra"
    }else if (ataqueAleatorio == 4 ){
        ataqueEnemigo = "Aire"
    }else {
        ataqueEnemigo = "Electricidad"
    }
    combate()
    
}

function combate (){

  
    let botonAtacar = document.getElementById("boton-volver-atacar")
    botonAtacar.disabled = true
    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate")
       
    
    }else if ((ataqueJugador == "Fuego" && (ataqueEnemigo == "Aire" || ataqueEnemigo == "Tierra")) ||
             (ataqueJugador == "Agua" && (ataqueEnemigo == "Fuego" || ataqueEnemigo == "Aire")) ||
             (ataqueJugador == "Tierra" && (ataqueEnemigo == "Agua" || ataqueEnemigo == "Electricidad")) ||
             (ataqueJugador == "Aire" && (ataqueEnemigo == "Tierra" || ataqueEnemigo == "Electricidad")) ||
             (ataqueJugador == "Electricidad" && (ataqueEnemigo == "Agua" || ataqueEnemigo == "Fuego"))){
            crearMensaje("Ganaste")
            vidasEnemigo -= 25 
            puntajeEnemigo = vidasEnemigo
            spanVidasEnemigo.innerHTML= vidasEnemigo
            
            poderesChamanes(ataqueJugador, nombreChamanJugador)
    }
    else {
        crearMensaje("Perdiste")
        vidasJugador -=25
        puntajeJugador = vidasJugador
        spanVidasJugador.innerHTML = vidasJugador
       
    }

    document.getElementById("contador-jugador").textContent = puntajeJugador;
    document.getElementById("contador-enemigo").textContent = puntajeEnemigo;

  revisarVidas ()
}

function poderesChamanes(ataqueJugador, nombreChamanJugador){
    

    if (nombreChamanJugador == "Raganar" && ataqueJugador == "Fuego"){
        vidasJugador += 10 
        puntajeJugador = vidasJugador
        spanVidasJugador.innerHTML = vidasJugador
        crearMensajeChaman("Raganar te otorgo +10 puntos de vida ")

    }

    if (nombreChamanJugador == "Kael" && ataqueJugador == "Agua"){
        vidasJugador += 10 
        puntajeJugador = vidasJugador
        spanVidasJugador.innerHTML = vidasJugador
        crearMensajeChaman("Raganar te otorgo +10 puntos de vida ")

    }
     if (nombreChamanJugador == "Naia" && ataqueJugador == "Tierra"){
        vidasJugador += 10 
        puntajeJugador = vidasJugador
        spanVidasJugador.innerHTML = vidasJugador
        crearMensajeChaman("Raganar te otorgo +10 puntos de vida ")

    }
    if (nombreChamanJugador == "Lira" && ataqueJugador == "Aire"){
        vidasJugador += 10 
        puntajeJugador = vidasJugador
        spanVidasJugador.innerHTML = vidasJugador
        crearMensajeChaman("Raganar te otorgo +10 puntos de vida ")

    }



}

function revisarVidas(){
    if (vidasEnemigo <= 0 ){
        crearMensajeFinal("perdiste")
         let sectionReiniciar = document.getElementById("reiniciar")
        sectionReiniciar.style.display = "block"
    }else if (vidasJugador <= 0){
        crearMensajeFinal("ganaste ")
        let sectionReiniciar = document.getElementById("reiniciar")
        sectionReiniciar.style.display = "block"
    }
}

function crearMensaje(resultado ){


    let seccionMensajes = document.getElementById ("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu chaman " + nombreChamanJugador + " ataco con " + ataqueJugador +  "el chaman " + nombreChamanEnemigo +  " del enemigo ataco con :  "+ ataqueEnemigo +" El resultado de la batalla : "+ resultado 

    seccionMensajes.appendChild(parrafo)
    bloquearBotonesSiguienteCombate()

    let botonAtacar = document.getElementById("boton-volver-atacar")
    botonAtacar.disabled = false
    botonAtacar.addEventListener("click",mostrarBotonesSiguienteCombate )
}

function bloquearBotonesSiguienteCombate(){
    
    botonFuego.style.display = "none"
    botonAgua.style.display = "none"
    botonTierra.style.display = "none"   
    botonAire.style.display = "none"
    botonElectricidad.style.display = "none"
    botonVolverAtacar.style.display = "block"
}

function mostrarBotonesSiguienteCombate(){
    
    botonFuego.style.display = "block"
    botonAgua.style.display = "block"
    botonTierra.style.display = "block"
    botonAire.style.display = "block"
    botonElectricidad.style.display = "block"
    botonVolverAtacar.style.display = "none"
}

function crearMensajeChaman(nombreChamanJugador ){
    let seccionMensajes = document.getElementById ("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = nombreChamanJugador + " te otorgo +10 puntos "
    seccionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal ){
    let seccionMensajes = document.getElementById ("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    seccionMensajes.appendChild(parrafo)
    bloquearBotonesSiguienteCombate()
    let botonVolverAtacar = document.getElementById("boton-volver-atacar")
    botonVolverAtacar.style.display = "none"

}

function reiniciarJuego (){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}
window.addEventListener("load", iniciarPantallaDeCarga)