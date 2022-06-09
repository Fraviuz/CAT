//Java script es usado para permitir hacer un par de cosas, navegar la pagina por secciones a travez de la funcione "navigation" la cual es usada por es navegador que se encuentra a la izquerda, el navegador en el header y un "event listener" que observa cuando se usa la rueda del mause se mueve. La otra funcion que cumple es poder mostrar el formulario yesconderlo al ser cerrado o completado

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

// numeroPositionTranslale() toma el string de la propiedad translate en css y nos retorna solo el numero que corresponde a la pocion actual en Y 

function numeroPositionTranslate(translate) {
    let returnTranslate = ''
    let comas = 0
    
    for (let index = 0; index < translate.length; index++) {

        if (translate[index] == ',') {
            comas++
        } else if (comas == 1) {
            returnTranslate = returnTranslate.concat(translate[index])
        }
        
    }

    returnTranslate = returnTranslate.slice(0,returnTranslate.length-2)
    return parseInt(returnTranslate)
}

// La funcion navigation() fue cambiada, ahora es necesario el objetivo a cambiar (target) y la operacion que se va a realizar en translate

function navigation(target, operation) {

    let currentPosition = numeroPositionTranslate(document.getElementById(target).style.transform)

    // por defecto aun si es declarada en css currentPosition es NaN, por lo tanto se comprueba y cambie a 0 con la siguiente operacion

    if (isNaN(currentPosition)){
        currentPosition = 0
    }

    currentPosition = currentPosition + operation

    document.getElementById(target).style.transform = 'translate3d(0,' + currentPosition + 'vh,0)'

}


// "EventListener" se encarga de identificar cuando es usado la rueda del mause y a que direccion, luego llama a la funcion "changePosition(direction)" con la dicha direccion que permite hacer un control para no trasladar la vista fuera del contenido.

// Se agrego una condicion screen width para que solo funcione en PC y laptops, hay otras maneras de hacerlo pero esta evita un problema donde cuado se reverte se puede navegar fuera de la pantalla, otra opcion es ver en que pocicion el usuario se encuentra.

window.addEventListener("wheel", event => {
    let delta = Math.sign(event.deltaY);
    if (screen.width > 1023){
        changePosition(delta);
    }
});

// changePosition() toma la direccion, -1 o 1 controla si es posible, cambia la posicion llamando navigation() y registra cual es con setCurrentPosition()

function changePosition(direction) {

    let pos = getCurrentPosition()

    if (pos > 1 && direction == -1){
        navigation('base',+100)
        setCurrentPosition(pos-1)
    }

    if (pos < 3 && direction == 1){
        navigation('base',-100)
        setCurrentPosition(pos+1)
    }
}

// La funcion "toggleForm()" permite mostrar y ocultar tanto el formulario indicado por "form-container" y el navegador lateral indicado por "navigator", hay un control que permite identificar cual va a mostrar y ocultar.

function toggleForm(){
    if (document.getElementById('plano-formulario').style.display=='none') {
        document.getElementById('plano-formulario').style.display = 'flex'
        if (! isPhone()){
            document.getElementById('navegador-lateral').style.display = 'none'
        }
    } else {
        document.getElementById('plano-formulario').style.display = 'none'
        if (! isPhone()){
            document.getElementById('navegador-lateral').style.display = 'block'
        }
    }
}

//Comprueba si es un telefono para poder retornar la funcion de scroll

if (isPhone() == false){
    console.log('pass')
    document.body.style.overflowY = "hidden";
} else {
    window.body.style.overflowY = "visible";
}

// Funcion isPhone() resta el ancho con el alto de la pantalla para ver si es un telelfono o no, retona true si es un telefono y falso si no lo es

function isPhone(){

    let screenSign = Math.sign(screen.width - screen.height)

    if(screenSign == -1) {
        return true
    } else {
        return false
    }
}