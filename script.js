window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval); // Limpa qualquer intervalo existente
        Interval = setInterval(startTimer, 10); // Chama a função a cada 10 milissegundos
    }

    buttonStop.onclick = function() {
        clearInterval(Interval); // Limpa o intervalo em execução
    }

    buttonReset.onclick = function() {
        clearInterval(Interval); // Limpa o intervalo em execução
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++; 

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds > 9 ? seconds : "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }
    }
}
