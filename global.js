window.onload = function () {
var dezenas = 00
var segundos = 00
var minutos = 00

var appendDezenas = document.getElementById("dezenas")
var appendSegundos = document.getElementById("segundos")
var appendMinutos = document.getElementById("minutos")
var buttonStart = document.getElementById("start")
var buttonStop = document.getElementById("stop")
var buttonReset = document.getElementById("reset")

var  interval


buttonStart.onclick = function(){
    buttonStart.innerText = "Contando"
    clearInterval(interval)
    interval = setInterval(startTimer,10)
    
    
};

buttonStop.onclick = function(){
    buttonStart.innerText = "Iniciar"
    clearInterval(interval)
    
    
};

buttonReset.onclick = function(){
    buttonStart.innerText = "Iniciar"
    clearInterval(interval)
    segundos = "00"
    dezenas = "00"
    minutos = "00"
    appendDezenas.innerText = dezenas
    appendSegundos.innerText = segundos
    appendMinutos.innerText = minutos
}




function startTimer(){
    dezenas ++;
    if (dezenas <=9){
        appendDezenas.innerText = "0" + dezenas
    }

    if (dezenas >=9){
        appendDezenas.innerText = dezenas
    }
    if (dezenas > 99 ){
        segundos ++
        appendSegundos.innerText = "0" + segundos
        dezenas = 0;
        appendDezenas.innerText = "0" + 0;
    }
    if (segundos > 9){
        appendSegundos.innerText = segundos
    }

    if (segundos > 59){
        minutos++
        appendMinutos.innerText = "0" + minutos
        segundos = "0"
        appendSegundos.innerText = "0" + 0;
    }
 


}

};
