let displayIndroduceMyself = document.querySelector(".indroduce-myself");
let displayAlbum = document.querySelector(".album");
let displayTecnologia = document.querySelector(".secaoTec");

function introduceMyself () {
    displayIndroduceMyself.style.display = "block";
        displayAlbum.style.display = "none";
        displayTecnologia.style.display = "block";
}
let sobre = document.getElementById("sobre");
sobre.addEventListener("click", introduceMyself);

function album () {
    displayAlbum.style.display = "block";
        displayIndroduceMyself.style.display = "none";
        displayTecnologia.style.display = "none";
}
let projetos = document.getElementById("projetos");
projetos.addEventListener("click", album);

/* Input Pesquisar */
function pesquisar () {
    let input = document.getElementById("buscar").value;
    input = input.toLowerCase();
    let titulo = document.getElementsByClassName("tituloProjeto");
    let aux = [];
    let boxProjeto = document.getElementsByClassName("col");
    let boxInfo = document.querySelector(".resultado-falso");
    let resultadosEncontrados = false;
    let projetosResultado = document.querySelector(".projetos-reultado");

    for (let i=0; i < titulo.length; i++) {
        aux[i] = titulo[i].innerHTML.toLowerCase();
        if (!aux[i].includes(input)) {
            boxProjeto[i].style.display = "none";
            
        } else {
            boxProjeto[i].style.display = "flex";
            resultadosEncontrados = true;
        }
        
    }

    if (resultadosEncontrados) {
        boxInfo.style.display = "none";
    } else {
        boxInfo.style.display = "flex";
        projetosResultado.innerHTML = "Resultado:";
        console.log(projetosResultado);
    }
}

let btnPesquisar = document.getElementById("button-addon2");
btnPesquisar.addEventListener("click", pesquisar);