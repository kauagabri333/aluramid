//pom-------------------------------------------------------\\
function tocaSomPom () {
    document.querySelector('#som_tecla_Pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

//enquanto
while () {
    listaDeTeclas[0].onclick = tocaSomPom
}

