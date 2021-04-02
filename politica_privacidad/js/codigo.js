const icono = document.querySelector(".cont-icon");

const links = document.querySelector(".links2");

const header = document.querySelector(".header")

const a = document.querySelector(".second-a")

const mainlink = document.querySelector(".sia")

const secondlink = document.querySelector(".links-ul")

const mainlink2 = document.querySelector(".sia2")

const secondlink2 = document.querySelector(".links-ul2")

// const secondlink2 = document.querySelector(".second-link3")

var confirmar = true;
var confirmar2 = true;
var confirmar3 = true;

icono.addEventListener("click", ()=>{
    links.style.width="100%";
    links.style.position="absolute";
    // links.style.height="100%"
    links.style.zIndex="2"
    links.style.color="white"
    // links.style.background="black"
    links.style.top="100px"
    console.log("asd")

    if(confirmar == false){
        links.style.display="none";
        confirmar=true
    } else if(confirmar == true){
        links.style.display="block";
        confirmar=false
    }
})


mainlink.addEventListener("click", ()=>{
    if(confirmar2 == false){
        secondlink.style.display="none"
        confirmar2=true
    } else if(confirmar2 == true){
        secondlink.style.display="block";
        confirmar2=false
    }
})


mainlink2.addEventListener("click", ()=>{
    if(confirmar3 == false){
        secondlink2.style.display="none"
        secondlink2.style.color="black"
        confirmar3=true
    } else if(confirmar3 == true){
        secondlink2.style.display="block";
        secondlink2.style.color="black"
        confirmar3=false
    }
})
