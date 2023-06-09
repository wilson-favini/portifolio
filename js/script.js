let displayIndroduceMyself = document.querySelector(".indroduce-myself");
let displayAlbum = document.querySelector(".album");

function introduceMyself () {
    displayIndroduceMyself.style.display = "block";
        displayAlbum.style.display = "none";
    /*
    if (displayIndroduceMyself.style.display === "block") {
        displayIndroduceMyself.style.display = "block";
        displayAlbum.style.display = "none";
    }
    */

}
let sobre = document.getElementById("sobre");
sobre.addEventListener("click", introduceMyself);

function album () {
    displayAlbum.style.display = "block";
        displayIndroduceMyself.style.display = "none";
        /*
    if (displayAlbum.style.display === "none") {
        displayAlbum.style.display = "block";
        displayIndroduceMyself.style.display = "none";
    }
    */
}
let projetos = document.getElementById("projetos");
projetos.addEventListener("click", album)

/* Input Pesquisar */
function pesquisar () {
    let input = document.getElementById("buscar").value;
    input = input.toLowerCase();
    let titulo = document.getElementsByClassName("tituloProjeto");
    let aux = [];
    let boxProjeto = document.getElementsByClassName("col");
    let boxInfo = document.querySelector(".resultado-falso");

    for (let i=0; i < titulo.length; i++) {
        aux[i] = titulo[i].value;
        if (!titulo[i].innerHTML.toLowerCase().includes(input)) {
            boxProjeto[i].style.display = "none";
            boxInfo.style.display = "flex";
            
        } else {
            boxProjeto[i].style.display = "flex";
            boxInfo.style.display = "none";
            
        }
        console.log("Posição do i: " + (i) + "; display: " + boxInfo.style.display);
        console.log("; título: " + (aux[i])+ titulo[i]);
    }
}

let btnPesquisar = document.getElementById("button-addon2");
btnPesquisar.addEventListener("click", pesquisar);