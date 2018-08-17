

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

function buscar(){

  //if(divDanger.childElementCount)

  var cep = document.getElementById('cep').value;
  var divDanger = document.getElementById('danger');
  var divResult = document.getElementById('result');

  var alert = document.createElement('div');
  alert.innerHTML = 'Digite apenas números!';
  alert.setAttribute('class','alert alert-danger text-center');

  cep = cep.replace('-','');

  if(isNaN(cep)){

    if(divDanger.childElementCount == 0) divDanger.appendChild(alert);
        

        divResult.style.display = "none";

  }else{

    if(divDanger.childElementCount > 0){
      
      divDanger.innerHTML = '';
      
    }
        
        let api = 'https://viacep.com.br/ws/'+cep+'/json/';
        
        let request = new XMLHttpRequest();
            request.open('GET',api);
            request.send();

            request.onload = function(){
            
             var data = JSON.parse(request.responseText);

             var logradouro = document.getElementById('logradouro');
             var complemento = document.getElementById('complemento');
             var bairro = document.getElementById('bairro');
             var localidade = document.getElementById('localidade');
             var uf = document.getElementById('uf');
             var unidade = document.getElementById('unidade');
             var ibge = document.getElementById('ibge');

             if(data.erro){

                var alert = document.createElement('div');
                alert.innerHTML = 'CEP inválido!';
                alert.setAttribute('class','alert alert-danger text-center');

                    if(divDanger.childElementCount == 0){
                      
                      divDanger.appendChild(alert);  
                      divResult.style.display = "none";
                      
                      return false;
                  }

              }
             
              if(!data.erro){   
                  
                  console.log(data);
                  logradouro.value = data.logradouro;
                  complemento.value = data.complemento;
                  bairro.value = data.bairro;
                  localidade.value = data.localidade;
                  uf.value = data.uf;
                  unidade.value = data.unidade;
                  ibge.value = data.logradouro;
                  divResult.style.display = "block";
                  return false;
                }

            }

        

  }

}