function trataString(string){
    //string aux para verificar se existe espaço na infomração
    let auxString = string.indexOf(' ')
    //if para verificar quando tem e quando não tem espaço
    if(auxString < 0){
        //não tem espaço, somente tratar para se caso tiver acento
        let string2 = string.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
        return string2
    }else{
        //tem espaço, então retirar o espaço, adicionar o "+" entre as palavras e retirar o acento caso tiver
        let string2 = string.split(" ");
        let string3 = string2.join("+")
        let string4 = string3.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
        return string4
    }
}

let string = "São José do Rio Preto"

let retornoFuncao = trataString(string)

console.log(retornoFuncao)

//https://api.openweathermap.org/data/2.5/weather?q=Sao+Jose+do+Rio+Preto&lang=pt-br&appid=6bc765672523aa609df67f28de838da5&units=metric