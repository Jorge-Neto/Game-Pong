var folhaDesenho = document.getElementById("folha");
var lapis = folhaDesenho.getContext("2d");

var larguraCampo = 600;
var alturaCampo = 500;
var larguraLinha = 5;
var dimensaoBola = 7;
var alturaRaquete = 45;

//cor do lápis
lapis.fillStyle = '#000000';
//area do desenho (posições)
//rect = retângulo (X-inicial, Y-inicial, X-final, Y-final)
lapis.fillRect(0, 0, larguraCampo, alturaCampo);

//divisória central
lapis.fillStyle = '#FFFAF0';
lapis.fillRect(larguraCampo/2 - larguraLinha/2, 0, larguraLinha, alturaCampo);

//raquete do player
lapis.fillRect(0, 130, larguraLinha, alturaRaquete);

//raquete do com
lapis.fillRect(larguraCampo - larguraLinha, 330, larguraLinha, alturaRaquete);

//bola
lapis.fillRect(200, 150, dimensaoBola, dimensaoBola);
