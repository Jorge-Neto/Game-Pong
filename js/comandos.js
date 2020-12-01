window.onload = function () {
    setInterval(executar, 1000 / 60);
}

var folhaDesenho = document.getElementById("folha");
var lapis = folhaDesenho.getContext("2d");

var larguraCampo = 650, alturaCampo = 500, espessuraRede = 5;
var diametroBola = 7;
var alturaRaquete = 45;
var posicaoCom = 330, velocidadeCom = 5;
var efeitoRaquete = 0.3;

var posicaoJogadorUm = posicaoCom = 130;
var posicaoBolaX = posicaoBolaY = 100;
var velocidadeBolaPosicaoX = velocidadeBolaPosicaoY = 5;
var pontuacaoJogador1 = pontuacaoJogador2 = 0;

folhaDesenho.addEventListener('mousemove', function (e) {
    posicaoJogadorUm = e.clientY - alturaRaquete / 2;
});

function executar() {
    //cor do lápis
    lapis.fillStyle = '#000000';
    //area do desenho (posições)
    //rect = retângulo (X-inicial, Y-inicial, X-final, Y-final)
    lapis.fillRect(0, 0, larguraCampo, alturaCampo);

    //divisória central
    lapis.fillStyle = '#FFFAF0';
    lapis.fillRect(larguraCampo / 2 - espessuraRede / 2, 0, espessuraRede, alturaCampo);

    //raquete do player (tipo 1)
    lapis.fillRect(0, posicaoJogadorUm, espessuraRede, alturaRaquete);
    //raquete do com (tipo 2)
    lapis.fillRect(larguraCampo - espessuraRede, posicaoCom, espessuraRede, alturaRaquete);

    //bola
    lapis.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola);

    //Escrever pontuacao do jogo
    lapis.fillText("Humano - " + pontuacaoJogador1 + " pontos", 100, 100);
    lapis.fillText("Computador - " + pontuacaoJogador2 + " pontos", larguraCampo - 200, 100);

    //movimentação da bola
    posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
    posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

    //verifica se a bola bateu na borda superior
    if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }
    //verifica se a bola bateu na borda inferior
    if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }

    //verifica se o Computador fez um ponto
    if (posicaoBolaX < 0) {
        if (posicaoBolaY > posicaoJogadorUm && posicaoBolaY < posicaoJogadorUm + alturaRaquete) {
            //rebater a bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

            //efeito na bola
            var diferencaY = posicaoBolaY - (posicaoJogadorUm + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        } else {
            //ponto para jogador 2 
            pontuacaoJogador2++;

            //bola para o centro
            posicaoBolaX = larguraCampo / 2; posicaoBolaY = alturaCampo / 2;
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
            velocidadeBolaPosicaoY = 3;
        }
    }

    //verifica se o player fez ponto
    if (posicaoBolaX > larguraCampo) {
        if (posicaoBolaY > posicaoCom && posicaoBolaY < posicaoCom + alturaRaquete) {
            //Rebater a bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

            var diferencaY = posicaoBolaY - (posicaoCom + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        } else {
            //ponto player
            pontuacaoJogador1 = pontuacaoJogador1 + 1;

            //bola no centro
            posicaoBolaX = larguraCampo / 2; posicaoBolaY = alturaCampo / 2;
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
            velocidadeBolaPosicaoY = 3;
        }
    }   

    //Atualizar a posicao do Com
    if (posicaoCom + alturaRaquete / 2 < posicaoBolaY) {
        posicaoCom = posicaoCom + velocidadeCom;
    } else {
        posicaoCom = posicaoCom - velocidadeCom;
    }
}