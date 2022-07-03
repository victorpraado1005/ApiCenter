let API_URL = "http://api.weatherapi.com/v1/forecast.json?key="

let API_KEY = "177f54f66a33404088153326222204"

function weatherApi(){
    //variavel para puxar a informação do nome da cidade inserida pelo usuário
    let string = document.getElementById("city").value
    //chamada da função de tratamento da string para deixar conforme o aceite da url
    string = tratamentoString(string)
    //junção das variaveis para montar a url final que será responsável por puxar os dados
    let finalURL = API_URL + API_KEY + "&q=" + string + "&days=1&aqi=no&alerts=no";

    fetch(finalURL).then((res)=>{
        return res.json()        
    }).then((data)=>{        
        if (data.error) {
            document.getElementById("weather_city_name").innerHTML = ''
            document.getElementById("weather_temp").innerHTML = ''
            document.getElementById("weather_temp_min").innerHTML = ''
            document.getElementById("weather_temp_max").innerHTML = ''
            alert('Cidade não encontrada!')
            document.getElementById("city").value=''            
        } else{            
            let weather_city_name = data.location.name
            let weather_temp = data.current.temp_c
            let weather_temp_min = data.forecast.forecastday[0].day.mintemp_c
            let weather_temp_max = data.forecast.forecastday[0].day.maxtemp_c
            document.getElementById("weather_city_name").innerHTML = weather_city_name
            document.getElementById("weather_temp").innerHTML = weather_temp
            document.getElementById("weather_temp_min").innerHTML = weather_temp_min
            document.getElementById("weather_temp_max").innerHTML = weather_temp_max
            document.getElementById("city").value=''
        }
        
    })
    
}

function tratamentoString(string){
    string = string.replaceAll(' ', '%20')
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    return string
}