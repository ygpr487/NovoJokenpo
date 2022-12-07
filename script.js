var jogadorEscolha = 0;
var jogadorPontuacao = 0;
var computadorEscolha = 0;
var computadorPontuacao = 0;
var ganhador = -1;

function jogar(escolha) {
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    if ((jogadorEscolha) == 1 && (computadorEscolha == 1)) {
        ganhador = 0;
    }

    else if((jogadorEscolha) == 1 && (computadorEscolha == 2)) {
        ganhador = 2;
    }

    else if((jogadorEscolha) == 1 && (computadorEscolha == 3)) {
        ganhador = 1;
    }

    else if((jogadorEscolha) == 2 && (computadorEscolha == 1)) {
        ganhador = 1;
    }

    else if((jogadorEscolha) == 2 && (computadorEscolha == 2)) {
        ganhador = 0;
    }

    else if((jogadorEscolha) == 2 && (computadorEscolha == 3)) {
        ganhador = 2;
    }

    else if((jogadorEscolha) == 3 && (computadorEscolha == 1)) {
        ganhador = 2;
    }

    else if((jogadorEscolha) == 3 && (computadorEscolha == 2)) {
        ganhador = 1;
    }

    else if((jogadorEscolha) == 3 && (computadorEscolha == 3)) {
        ganhador = 0;
    }

    document.getElementById("jogador-escolha-1").classList.remove('selecionado');

    document.getElementById("jogador-escolha-2").classList.remove('selecionado');

    document.getElementById("jogador-escolha-3").classList.remove('selecionado');

    document.getElementById("computador-escolha-1").classList.remove('selecionado');

    document.getElementById("computador-escolha-2").classList.remove('selecionado');

    document.getElementById("computador-escolha-3").classList.remove('selecionado');

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');

    if(ganhador == 0) {
        document.getElementById('mensagens').innerHTML = 'Empate';
    }

    else if(ganhador == 1) {
        document.getElementById('mensagens').innerHTML = 'Jogador Ganhou!';
        jogadorPontuacao++;
    }

    else if(ganhador == 2) {
        document.getElementById('mensagens').innerHTML = 'Computador Ganhou!';
        computadorPontuacao++;
    }

    document.getElementById('jogador-pontos').innerHTML = jogadorPontuacao
    document.getElementById('computador-pontos').innerHTML = computadorPontuacao

}