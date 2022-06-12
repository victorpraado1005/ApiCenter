let URL_VIACEP = "http://viacep.com.br/ws/"

let returnJson = "/json"

// console.log(finalURL)

function validaCEP(){
    let CEP = document.getElementById("cep").value

    let finalURL = URL_VIACEP + CEP + returnJson

    fetch(finalURL).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let viacep_cep = data.cep
        let viacep_cidade = data.localidade
        let viacep_estado = data.uf
        let viacep_logradouro = data.logradouro
        document.getElementById("viacep_cep").innerHTML = viacep_cep
        document.getElementById("viacep_cidade").innerHTML = viacep_cidade
        document.getElementById("viacep_estado").innerHTML = viacep_estado
        document.getElementById("viacep_logradouro").innerHTML = viacep_logradouro
    })
}