var folhaDesenho = document.getElementById("folha");
var areaDesenho = folhaDesenho.getContext("2d");

//cor da folha
areaDesenho.fillStyle = '#000000';
//area do desenho . retângulo (inicial X, inicial Y, largura, altura)
areaDesenho.fillRect(0, 0, 600, 500);

//divisória central
areaDesenho.fillStyle = '#FFFAF0';
areaDesenho.fillRect(297.5, 0, 5, 500);

//raquete do player