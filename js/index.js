var currentPosition = 1

function setCurrentPosition(position){
    currentPosition = position
}

function getCurrentPosition(){
    return currentPosition
}

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