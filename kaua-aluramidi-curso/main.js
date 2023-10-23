function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


//enquanto
for (let contador = 0; contador  < listaDeTeclas.length; contador++) {

}
    
 (contador < listaDeTeclas.length) 

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
 
    const idAudio = '#som_${instrumento}';//templete string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
        
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
}

