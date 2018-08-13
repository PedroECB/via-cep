

function formatCEP(){

    var input = document.getElementById('cep');
    var cep = document.getElementById('cep').value;
    var button = document.getElementById('button');

  if(cep.length == 5){

    input.value = cep+"-";
  }

  if(cep.length == 9){

    button.removeAttribute('disabled');
  }

  if(cep.length<9){

    button.setAttribute('disabled','');
  }

}