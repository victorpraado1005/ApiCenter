function converterMoeda(){
    let moeda = document.getElementById("moeda").value
    let totalConversao = document.getElementById("total").value

    let url = "https://economia.awesomeapi.com.br/"+ moeda;

    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        let rate = data[0].bid
        let total = rate * totalConversao;
        document.getElementById("currency").innerHTML = rate;
        document.getElementById("conversao").innerHTML = total.toFixed(2);
    })
}