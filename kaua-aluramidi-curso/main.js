function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        alert('elemento não encontrado');
        console.log('elemento não encontrado');
    }

    if (elemento != null) {
    if(elemento.localname === 'audio'){
        elemento.play();
    }
        
    }
  
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
        
    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'space' || evento.code === 'enter')

        if (evento.code === 'space') {
            tecla.classList.add('ativa');
        }
       
        if (evento.code === 'enter') {

        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


