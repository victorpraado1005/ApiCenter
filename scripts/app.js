$(document).ready(function () {
    $("body").addClass('api_money_background');
    $("#exchangeRatesAPI").show()
})

$("#btnWeatherAPI").click(()=>{            
    $("#weatherAPI").show()
    $("#exchangeRatesAPI").hide()
    $("#cepAPI").hide()
    $("body").removeClass('api_money_background');
    $("body").removeClass('api_viacep_background');
    $("body").addClass('api_weather_background');
})

$("#btnExchangeRatesAPI").click(()=>{
    $("#exchangeRatesAPI").show()
    $("#weatherAPI").hide()
    $("#cepAPI").hide()
    $("body").removeClass('api_weather_background');
    $("body").removeClass('api_viacep_background');
    $("body").addClass('api_money_background');
})

$("#btnViaCepAPI").click(()=>{
    $("#cepAPI").show()
    $("#exchangeRatesAPI").hide()
    $("#weatherAPI").hide()
    $("body").removeClass('api_weather_background');
    $("body").removeClass('api_money_background');
    $("body").addClass('api_viacep_background');
})