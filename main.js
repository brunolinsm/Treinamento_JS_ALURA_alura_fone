const listaDeTeclas = document.querySelectorAll('input[type=button]');
const visorDoTelefone = document.querySelector('input[type=tel]');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  tecla.onclick = function(){
    visorDoTelefone.value = visorDoTelefone.value + tecla.value;
  }

  tecla.onkeydown = function(evento){
    if(evento.code === "Enter" || evento.code === "Space"){
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
  }
  
}