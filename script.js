var dataLimite = new Date("01-01-23").getTime();
var tempoAtualizado = setInterval(function(){

    var tempoRestante = new Date().getTime();
    var tempoEstimado = dataLimite - tempoRestante;
    var dias = Math.floor(tempoEstimado / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tempoEstimado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tempoEstimado % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tempoEstimado % (1000 * 60)) / 1000);

    if (dias < 10) {
        dias = "0" + dias;
    }
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
});