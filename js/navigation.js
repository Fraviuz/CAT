class navigations{

    currentPosicion= 0

    constructor (sectionNum, target){
        this.sectionNum = sectionNum - 1
        this.target = target
    }

    moveTo(posicion) {
        if (posicion>this.sectionNum || posicion<0) {
            console.log('Position target out of the amount of section')
        } else {
            document.getElementById(target).style.transform = 'translate3d(0px, -'+ Number.toString(posicion) +'00vh, 0px)'
            setCurrentPosition(posicion)
        }
    }

    setCurrentPosition(position){
        currentPosition = position
    }

    getCurrentPosition(){
        return currentPosition
    }

    changePosition(direction) {

        let pos = getCurrentPosition()
    
        if (pos > 0 && direction == -1){
            pos=pos-1
            this.moveTo(pos)
            setCurrentPosition(pos)
        }
    
        if (pos < this.sectionNum && direction == 1){
            pos=pos+1
            this.moveTo(pos)
            setCurrentPosition(pos)
        }
    }
}