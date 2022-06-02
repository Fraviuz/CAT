//Java script es usado para permitir hacer un par de cosas, navegar la pagina por secciones a travez de la funcione "navigation" la cual es usada por es navegador que se encuentra a la izquerda, el navegador en el header y un "event listener" que observa cuando se usa la rueda del mause se mueve. La otra funcion qeu cumple es poder mostrar el formulario yesconderlo al ser cerrado o completado

//la variable "curentPosition" permite a la funcion "changePosition" saber en que posicion de la pagine se encuetra el usuario, default es 1 que reprecenta el inicio de la pagina, ideal seria tambien definir el la posicion maxima y colocar todas estas propiedades y funciones en una clase

var currentPosition = 1

//la funcion "setCurrentPosition()" permite cambiar la posicion en "curentPosition" tomando como dato la pocicion a la que se desea cambiar

function setCurrentPosition(position){
    currentPosition = position
}

//La funcion "getCurrentPosition()" permite saber en que pocision el usuario se encuentra en la pagina retornando el valor de la variable "currentPosition"

function getCurrentPosition(){
    return currentPosition
}

//La funcion "navigation()" cumple la funcion de trasladar el usuario a traves de las distintas partes de la paguina, en este caso 4 secciones, idealmente esto funcionaria de otra manera con un maximo definido antes. 

//Es necesario para que funcione los datos "target" (Este dato indica la seccion de la pagina donde se hace el traslado, en este caso es el id "base" que identifica al div contenedor del contenido principal) y "posicion" (Este dato indica la posicion a la cual el usuario se quere trasladar en la paguina)

function navigation(target, posicion) {
    if (posicion==1) {
        document.getElementById(target).style.transform = 'translate3d(0px, 0px, 0px)'
        setCurrentPosition(posicion)
    }
    if (posicion==2) {
        document.getElementById(target).style.transform = 'translate3d(0, -100vh, 0)'
        setCurrentPosition(posicion)
    }
    if (posicion==3) {
        document.getElementById(target).style.transform = 'translate3d(0px, -200vh, 0px)'
        setCurrentPosition(posicion)
    }
    if (posicion==4) {
        document.getElementById(target).style.transform = 'translate3d(0px, -300vh, 0px)'
        setCurrentPosition(posicion)
    }
}

// "EventListener" se encarga de identificar cuando es usado la rueda del mause y a que direccion, luego llama a la funcion "changePosition(direction)" con la dicha direccion que permite hacer un control para no trasladar la vista fuera del contenido.

window.addEventListener("wheel", event => {
    let delta = Math.sign(event.deltaY);
    changePosition(delta);
});

function changePosition(direction) {

    let pos = getCurrentPosition()

    if (pos > 1 && direction == -1){
        pos=pos-1
        navigation('base', pos)
        setCurrentPosition(pos)
    }

    if (pos < 4 && direction == 1){
        pos=pos+1
        navigation('base', pos)
        setCurrentPosition(pos)
    }
}

// La funcion "toggleForm()" permite mostrar y ocultar tanto el formulario indicado por "form-container" y el navegador lateral indicado por "navigator", hay un control que permite identificar cual va a mostrar y ocultar.

function toggleForm(){
    if (document.getElementById('form-container').style.display=='none') {
        document.getElementById('form-container').style.display = 'block'
        document.getElementById('navigator').style.display = 'none'
    } else {
        document.getElementById('form-container').style.display = 'none'
        document.getElementById('navigator').style.display = 'block'
    }
}