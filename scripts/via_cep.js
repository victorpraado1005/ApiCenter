let URL_VIACEP = "https://viacep.com.br/ws/";

let returnJson = "/json";

// console.log(finalURL)

function validaCEP() {
  let CEP = document.getElementById("cep").value;
  let CEPaux = String(CEP);
  let finalURL = URL_VIACEP + CEP + returnJson;

  if (CEPaux.indexOf("-") > 0) {    
    if (CEP == "" || CEP.length != 9) {
      alert("Digite o CEP corretamente!");
    } else {
      callApi(finalURL);
    }
  } else {
    if (CEP == "" || CEP.length != 8) {
      alert("Digite o CEP corretamente!");
    } else {
      callApi(finalURL);
    }
  }
}

function callApi(finalURL) {
  fetch(finalURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {      
      if (data.erro) {
        alert("CEP não encontrado.");
      } else {
        let viacep_cidade = data.localidade;
        let viacep_estado = data.uf;
        let viacep_logradouro = data.logradouro;
        document.getElementById("viacep_cidade").innerHTML = viacep_cidade;
        document.getElementById("viacep_estado").innerHTML = viacep_estado;
        document.getElementById("viacep_logradouro").innerHTML =
          viacep_logradouro;
      }
    });
}
