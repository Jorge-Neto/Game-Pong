var folhaDesenho = document.getElementById("folha");
var lapis = folhaDesenho.getContext("2d");

//cor do lápis
lapis.fillStyle = '#000000';
//area do desenho (posições)
//rect = retângulo (X-inicial, Y-inicial, X-final, Y-final)
lapis.fillRect(0, 0, 600, 500);

//divisória central
lapis.fillStyle = '#FFFAF0';
lapis.fillRect(297.5, 0, 5, 500);

//raquete do player
lapis.fillRect(0, 130, 5, 40);

//raquete do com
lapis.fillRect(595, 330, 5, 50);

//bola
lapis.fillRect(200, 150, 7, 7);
