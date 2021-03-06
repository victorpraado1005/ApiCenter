function converterMoeda(){
    let currency = getCurrency();    
    let totalConversao = document.getElementById("total").value

    let url = "https://economia.awesomeapi.com.br/"+ currency;

    if (totalConversao == ''){
        alert('Digitar a quantidade.')
    }else{
        fetch(url).then((res)=>{
            return res.json();
        }).then((data)=>{
            let rate = data[0].bid
            let total = rate * totalConversao;            
            total = total.toLocaleString('pt-BR')                        
            let totalAux = total.substring(0, total.length - 1)            
            document.getElementById("conversao").innerHTML = 'R$ ' + totalAux;
        })
    }            
}

function getCurrency(){
    var select = document.getElementById('currency')
    return select.options[select.selectedIndex].value    
  }