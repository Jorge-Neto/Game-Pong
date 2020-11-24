window.onload = function () {
    setInterval(executar, 1000 / 30);
}

var posicaoBolaX = posicaoBolaY = 100;

function executar() {
var folhaDesenho = document.getElementById("folha");
var lapis = folhaDesenho.getContext("2d");

var larguraCampo = 600;
var alturaCampo = 500;
var espessuraRede = 5;
var diametroBola = 7;
var alturaRaquete = 45;

//cor do lápis
lapis.fillStyle = '#000000';
//area do desenho (posições)
//rect = retângulo (X-inicial, Y-inicial, X-final, Y-final)
lapis.fillRect(0, 0, larguraCampo, alturaCampo);

//divisória central
lapis.fillStyle = '#FFFAF0';
lapis.fillRect(larguraCampo/2 - espessuraRede/2, 0, espessuraRede, alturaCampo);

//raquete do player
lapis.fillRect(0, 130, espessuraRede, alturaRaquete);

//raquete do com
lapis.fillRect(larguraCampo - espessuraRede, 330, espessuraRede, alturaRaquete);

//bola
lapis.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola);

posicaoBolaX = posicaoBolaX + 1;
posicaoBolaY = posicaoBolaY + 1;
}