let menuVisible= false;

function mostrarOcultarMenu(){ //ocultar mostrar menu
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window. innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("htmlcss")
        habilidades[2].classList.add("cyunity")
        habilidades[3].classList.add("Python")
        habilidades[4].classList.add("git")
        habilidades[5].classList.add("trabajo")
        habilidades[6].classList.add("presion")
        habilidades[7].classList.add("analitico")
        habilidades[8].classList.add("productividad")
        habilidades[9].classList.add("cratividad")
    }
}

window.onscroll = function(){ //scroll relacion animacion
    efectoHabilidades();
}