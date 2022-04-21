let API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q="

let API_KEY = "6bc765672523aa609df67f28de838da5"

function weatherApi(){
    //variavel para puxar a informação do nome da cidade inserida pelo usuário
    let string = document.getElementById("city").value
    //chamada da função de tratamento da string para deixar conforme o aceite da url
    string = tratamentoString(string)
    //junção das variaveis para montar a url final que será responsável por puxar os dados
    let finalURL = API_URL + string + "&appid=" + API_KEY;

    fetch(finalURL).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let weather_city_name = data.name
        let weather_temp = data.main.temp
        let weather_temp_min = data.main.temp_min
        let weather_temp_max = data.main.temp_max
        document.getElementById("weather_city_name").innerHTML = weather_city_name
        document.getElementById("weather_temp").innerHTML = weather_temp
        document.getElementById("weather_temp_min").innerHTML = weather_temp_min
        document.getElementById("weather_temp_max").innerHTML = weather_temp_max
    })
    
}

function tratamentoString(string){
    string = string.replaceAll(' ', '+')
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    return string
}

//https://api.openweathermap.org/data/2.5/weather?q=Sao+Jose+do+Rio+Preto&lang=pt-br&appid=6bc765672523aa609df67f28de838da5&units=metric