function converterMoeda(moeda, amount){
    let url = "https://v6.exchangerate-api.com/v6/45b58dbce00ed6d35c4e0d49/pair/"+ moeda  + "/BRL/" + amount;
    console.log(url)

    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        let rate = data.conversion_rate
        let total = rate * amount;
        document.getElementById("moeda").innerHTML = rate;
        document.getElementById("conversao").innerHTML = total.toFixed(2);
    })
}

converterMoeda("EUR", 10)