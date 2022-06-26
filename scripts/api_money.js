function converterMoeda(){
    let currency = getCurrency();    
    let totalConversao = document.getElementById("total").value

    let url = "https://economia.awesomeapi.com.br/"+ currency;

    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        let rate = data[0].bid
        let total = rate * totalConversao;
        document.getElementById("conversao").innerHTML = total.toFixed(2);
    })    
}

function getCurrency(){
    var select = document.getElementById('currency')
    return select.options[select.selectedIndex].value    
  }