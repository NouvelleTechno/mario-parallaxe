// On va chercher tous les éléments sur lesquels on intervient
let mario = document.querySelector("#mario")
let solHaut = document.querySelector("#sol-haut")
let solBas = document.querySelector("#sol-bas")
let paysage = document.querySelector("#paysage")
let ciel = document.querySelector("body")

// On conserve le "décalage" des éléments
let decalage = 0

window.onload = () => {
    document.addEventListener("keydown", marcher)
    document.addEventListener("keyup", stopper)
}

/**
 * Cette fonction fait marcher Mario
 */
function marcher(event){
    switch(event.key){
        case "ArrowLeft":
            // On anime Mario
            mario.classList.add("mario-gauche")
            mario.classList.remove("mario-droite")
            parallaxe()
            decalage++
            break
        case "ArrowRight":
            mario.classList.add("mario-droite")
            mario.classList.remove("mario-gauche")
            parallaxe()
            decalage--
            break
    }
}

/**
 * Cette fonction arrête Mario
 */
function stopper(event){
    mario.classList.remove("mario-gauche")
    mario.classList.remove("mario-droite")
}

/**
 * On décale les différents éléments
 */
function parallaxe(){
    solBas.style.backgroundPositionX = (decalage * 4) + "px"
    solHaut.style.backgroundPositionX = (decalage * 4) + "px"
    paysage.style.backgroundPositionX = (decalage * 2) + "px"
    ciel.style.backgroundPositionX = decalage + "px"
}