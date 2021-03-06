/* FEITO POR JOÃO PEDRO MARTINELLI */

/* 
    VERMELHO = ABSOLUTISMO
    AZUL = LIBERALISMO
    VERDE = SOVIÉTICO
    PRETO = FASCISTA
*/

var carta = []
var random = Math.floor(Math.random()*12)

var posiAzul = []
var cartasAzuis = []

var posiVermelho = []
var cartasVermelhas = []

var posiVerde = []
var cartasVerde = []

var posiAmarelo = []
var cartasAmarelo = []

var posiPreto = []
var cartasPreto = []

var posiMarrom = []
var cartasMarrom = []

var cartasSelecionadas = []

var paresFormados = []

var podeJogar = false

var verificaVermelho = 0
var verificaAzul = 0
var verificaVerde = 0
var verificaPreto = 0
var verificaAmarelo = 0
var verificaMarrom = 0

var explicacao = document.getElementById('explicacao')
var memorize = document.getElementById('alerta_comeco')
var aviso = document.getElementById('aviso')
var imgExplicacao = document.getElementById('img-explicacao')
var pExplicacao = document.getElementById('texto-explicativo')
var titulo = document.getElementById('titulo')

var absolutismoExplicacao = 'Concentração de poder nas mãos do rei, não tendo um parlamento para aprovações de decisões e é totalmente identificado como Estado.'

var sovieticaExplicacao = 'Surgiu a partir da Revolução Russa que começou no ano de 1917 com o objetivo de fazer frente às condições dos trabalhadores, urbanos e rurais e foi liderada por Josef Stalin dos anos 1924 até 1953'

var liberalismoExplicacao = 'Se opôs ao governo controlador e centralizador do Estado absolutista, que tinha como principais características o acúmulo de riquezas, o controle da economia e uma relação de autoritarismo entre o governo e o povo.'

var fascismoExplicacao = 'Essa forma de Estado foi implantada e se desenvolveu nas décadas de 1920 a 1940, primeiro na Itália, depois na Alemanha e em vários outros países europeus, com pequenas diferenças. A base econômica desse Estado era capitalista.'

var bemEstarExplicacao = 'O Estado de bem-estar social ou Estado social, surgiu nos EUA e tinha como objetivo romper com o liberalismo, tinha como característica a intervenção estatal na economia.'

var neoliberalismoExplicacao = 'Neoliberalismo é uma doutrina socioeconômica que retoma os antigos ideais do liberalismo clássico ao sugerir a mínima intervenção do Estado na economia.'

function controladora() {
    setTimeout (
        function() {
            memorize.style.display = 'none'
        },
        2000
    )
    setTimeout (
    function() {atribuiID()
    atribuiPares()
    visualizacao()
    
    },
    2000
    )
}

function atribuiID() {
    for(let c = 1; c <= 12; c++) {
        carta.push(document.getElementById(`carta-${c}`))
    }
}

function atribuiPares() {
    atribuiVermelho()

    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0])

    atribuiAzul()

    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    atribuiVerde()
    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    atribuiAmarelo()

    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    atribuiPreto()

    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])
    atribuiMarrom()
}

function visualizacao() {

    carta[posiVermelho[0]].style.background = 'url(imagens/sociologia-absolutismo.jpg)'
    carta[posiVermelho[1]].style.background = 'url(imagens/sociologia-absolutismo.jpg)'
    carta[posiVermelho[0]].style.backgroundSize = '100% 100%'
    carta[posiVermelho[1]].style.backgroundSize = '100% 100%'

    carta[posiAzul[0]].style.background = 'url(imagens/sociologia-liberalismo-cortada.jpg)'
    carta[posiAzul[1]].style.background = 'url(imagens/sociologia-liberalismo-cortada.jpg)'
    carta[posiAzul[0]].style.backgroundSize = '100% 100%'
    carta[posiAzul[1]].style.backgroundSize = '100% 100%'


    carta[posiVerde[0]].style.background = 'url(imagens/sociologia-sovietico.jpg)'
    carta[posiVerde[1]].style.background = 'url(imagens/sociologia-sovietico.jpg)'
    carta[posiVerde[0]].style.backgroundSize = '100% 100%'
    carta[posiVerde[1]].style.backgroundSize = '100% 100%'

    carta[posiPreto[0]].style.background = 'url(imagens/sociologia-fascista-cortada.jpg)'
    carta[posiPreto[1]].style.background = 'url(imagens/sociologia-fascista-cortada.jpg)'
    carta[posiPreto[0]].style.backgroundSize = '100% 100%'
    carta[posiPreto[1]].style.backgroundSize = '100% 100%'

    carta[posiAmarelo[0]].style.background = 'url(imagens/sociologia-bemEstar.jpg)'
    carta[posiAmarelo[1]].style.background = 'url(imagens/sociologia-bemEstar.jpg)'
    carta[posiAmarelo[0]].style.backgroundSize = '100% 100%'
    carta[posiAmarelo[1]].style.backgroundSize = '100% 100%'

    carta[posiMarrom[0]].style.background = 'url(imagens/sociologia-neoLiberalismo.jpg)'
    carta[posiMarrom[1]].style.background = 'url(imagens/sociologia-neoLiberalismo.jpg)'
    carta[posiMarrom[0]].style.backgroundSize = '100% 100%'
    carta[posiMarrom[1]].style.backgroundSize = '100% 100%'

    setTimeout(
        function() {
            carta[posiVermelho[0]].style.background = 'white'
            carta[posiVermelho[1]].style.background = 'white'

            carta[posiAzul[0]].style.background = 'white'
            carta[posiAzul[1]].style.background = 'white'

            carta[posiVerde[0]].style.background = 'white'
            carta[posiVerde[1]].style.background = 'white'

            carta[posiPreto[0]].style.background = 'white'
            carta[posiPreto[1]].style.background = 'white'

            carta[posiAmarelo[0]].style.background = 'white'
            carta[posiAmarelo[1]].style.background = 'white'

            carta[posiMarrom[0]].style.background = 'white'
            carta[posiMarrom[1]].style.background = 'white'

            podeJogar = true
        },
        5000
    )
}

function verificadorRandom(random) {
    var auxRandom = random
    random = Math.floor(Math.random()*12)
    if (auxRandom == random || random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0]) {
        random = Math.floor(Math.random()*12) 
    } 

    if (auxRandom == random || random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0]){
        verificadorRandom(random)
    }
    
    return random
}



//ATRIBUIÇÕES
function atribuiVermelho() {
    /* carta[random].style.background = 'red' */
    posiVermelho[0] = random
    cartasVermelhas[0] = carta[random]
    
    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

        /* carta[random].style.background = 'red' */
    posiVermelho[1] = random
    cartasVermelhas[1] = carta[random]
}

function atribuiAzul() {  
    /* carta[random].style.background = 'blue' */
    posiAzul[0] = random
    cartasAzuis[0] = carta[random]
    
    do{ 
    random = verificadorRandom(random)
    }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    /* carta[random].style.background = 'blue' */
    posiAzul[1] = random
    cartasAzuis[1] = carta[random]
}

function atribuiVerde() {
    /* carta[random].style.background = 'green' */
    posiVerde[0] = random
    cartasVerde[0] = carta[random]

    do{ 
        random = verificadorRandom(random)
        }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    /* carta[random].style.background = 'green' */
    posiVerde[1] = random
    cartasVerde[1] = carta[random]
}

function atribuiAmarelo() {
    /* carta[random].style.background = 'yellow' */
    posiAmarelo[0] = random
    cartasAmarelo[0] = carta[random]
    
    do{ 
    random = verificadorRandom(random)
    }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    /* carta[random].style.background = 'yellow' */
    posiAmarelo[1] = random
    cartasAmarelo[1] = carta[random]
}

function atribuiPreto() {
    /* carta[random].style.background = 'black' */
    posiPreto[0] = random
    cartasPreto[0] = carta[random]
    
    do{ 
    random = verificadorRandom(random)
    }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    /* carta[random].style.background = 'black' */
    posiPreto[1] = random
    cartasPreto[1] = carta[random]
}

function atribuiMarrom() {
    /* carta[random].style.background = 'brown' */
    posiMarrom[0] = random
    cartasMarrom[0] = carta[random]
    
    do{ 
    random = verificadorRandom(random)
    }while(random == posiVermelho[0] || random == posiVermelho[1] || random == posiAzul[0] || random == posiAzul[1] || random == posiVerde[0] || random == posiVerde[1] || random == posiPreto[0] || random == posiPreto[1] || random == posiAmarelo[0] || random == posiAmarelo[1] || random == posiMarrom[0])

    /* carta[random].style.background = 'brown' */
    posiMarrom[1] = random
    cartasMarrom[1] = carta[random]
}

// ONCLICK EVENTOS
function selecionador(c){
    if(podeJogar){
    
    mudaEstado(c)
    armazenaSelecionados(c)
    
    if (cartasSelecionadas.length == 2) {
        verificadorIgualdade(cartasSelecionadas)
        voltaEstado(cartasSelecionadas)
        cartasSelecionadas = []
    } 
    }
}

function mudaEstado(c){
    carta[c].style.transform = 'scale(1.05)'
    carta[c].style.boxShadow = '0px 0px 19px black'
    carta[c].style.zIndex = '2'
    if (c == posiVermelho[0] || c == posiVermelho[1]) {

        carta[c].style.background = 'url(imagens/sociologia-absolutismo.jpg)'
        carta[c].style.backgroundSize = '100% 100%'

    } else if (c == posiAzul[0] || c == posiAzul[1]) {

        carta[c].style.background = 'url(imagens/sociologia-liberalismo-cortada.jpg)'
        carta[c].style.backgroundSize = '100% 100%'

    } else if (c == posiVerde[0] || c == posiVerde[1]) {

        carta[c].style.background = 'url(imagens/sociologia-sovietico.jpg)'
        carta[c].style.backgroundSize = '100% 100%'

    } else if (c == posiPreto[0] || c == posiPreto[1]) {
        carta[c].style.background = 'url(imagens/sociologia-fascista-cortada.jpg)'
        carta[c].style.backgroundSize = '100% 100%'

    } else if (c == posiAmarelo[0] || c == posiAmarelo[1]) {

        carta[c].style.background = 'url(imagens/sociologia-bemEstar.jpg)'
        carta[c].style.backgroundSize = '100% 100%'

    } else if (c == posiMarrom[0] || c == posiMarrom[1]) {

        carta[c].style.background = 'url(imagens/sociologia-neoLiberalismo.jpg)'
        carta[c].style.backgroundSize = '100% 100%'
    } 
}

function voltaEstado(c) {
    c[0].style.transform = ''
    c[0].style.boxShadow = ''
    c[0].style.zIndex = ''
    c[1].style.transform = ''
    c[1].style.boxShadow = ''
    c[1].style.zIndex = ''
}

function armazenaSelecionados(c) {
    cartasSelecionadas.push(carta[c])
}

function verificadorIgualdade(cartasSelecionadas) {
    if (cartasSelecionadas[0] == cartasVermelhas[0] && cartasSelecionadas[1] == cartasVermelhas[1] || cartasSelecionadas[1] == cartasVermelhas[0] && cartasSelecionadas[0] == cartasVermelhas[1]) {

        carta[posiVermelho[0]].style.background = 'url(imagens/sociologia-absolutismo.jpg)'
        carta[posiVermelho[1]].style.background = 'url(imagens/sociologia-absolutismo.jpg)'
        carta[posiVermelho[0]].style.backgroundSize = '100% 100%'
        carta[posiVermelho[1]].style.backgroundSize = '100% 100%'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

        mostrarExplicacao('imagens/sociologia-absolutismo.jpg', '105%', absolutismoExplicacao, 'Estado Absolutista')

    } else if (cartasSelecionadas[0] == cartasAzuis[0] && cartasSelecionadas[1] == cartasAzuis[1] || cartasSelecionadas[1] == cartasAzuis[0] && cartasSelecionadas[0] == cartasAzuis[1]) {

        carta[posiAzul[0]].style.background = 'url(imagens/sociologia-liberalismo-cortada.jpg)'
        carta[posiAzul[1]].style.background = 'url(imagens/sociologia-liberalismo-cortada.jpg)'
        carta[posiAzul[0]].style.backgroundSize = '100% 100%'
        carta[posiAzul[1]].style.backgroundSize = '100% 100%'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

        mostrarExplicacao('imagens/sociologia-liberalismo.jpg', '201%', liberalismoExplicacao, 'Estado Liberal')
        
    } else if (cartasSelecionadas[0] == cartasVerde[0] && cartasSelecionadas[1] == cartasVerde[1] || cartasSelecionadas[1] == cartasVerde[0] && cartasSelecionadas[0] == cartasVerde[1]) {
       
        carta[posiVerde[0]].style.background = 'url(imagens/sociologia-sovietico.jpg)'
        carta[posiVerde[1]].style.background = 'url(imagens/sociologia-sovietico.jpg)'
        carta[posiVerde[0]].style.backgroundSize = '100% 100%'
        carta[posiVerde[1]].style.backgroundSize = '100% 100%'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

        mostrarExplicacao('imagens/sociologia-sovietico.jpg', '125%', sovieticaExplicacao, 'Estado Soviético')

    } else if (cartasSelecionadas[0] == cartasPreto[0] && cartasSelecionadas[1] == cartasPreto[1] || cartasSelecionadas[1] == cartasPreto[0] && cartasSelecionadas[0] == cartasPreto[1]) {

        carta[posiPreto[0]].style.background = 'url(imagens/sociologia-fascista-cortada.jpg)'
        carta[posiPreto[1]].style.background = 'url(imagens/sociologia-fascista-cortada.jpg)'
        carta[posiPreto[0]].style.backgroundSize = '100% 100%'
        carta[posiPreto[1]].style.backgroundSize = '100% 100%'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

        mostrarExplicacao('imagens/sociologia-fascista.jpg', '177%', fascismoExplicacao, 'Estado fascista')

    } else if (cartasSelecionadas[0] == cartasAmarelo[0] && cartasSelecionadas[1] == cartasAmarelo[1] || cartasSelecionadas[1] == cartasAmarelo[0] && cartasSelecionadas[0] == cartasAmarelo[1]) {

        carta[posiAmarelo[0]].style.background = 'url(imagens/sociologia-bemEstar.jpg)'
        carta[posiAmarelo[1]].style.background = 'url(imagens/sociologia-bemEstar.jpg)'
        carta[posiAmarelo[0]].style.backgroundSize = '100% 100%'
        carta[posiAmarelo[1]].style.backgroundSize = '100% 100%'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

        mostrarExplicacao('imagens/sociologia-bemEstar.jpg', '177%', bemEstarExplicacao, 'Estado Social')

    } else if (cartasSelecionadas[0] == cartasMarrom[0] && cartasSelecionadas[1] == cartasMarrom[1] || cartasSelecionadas[1] == cartasMarrom[0] && cartasSelecionadas[0] == cartasMarrom[1]) {

        carta[posiMarrom[0]].style.background = 'url(imagens/sociologia-neoLiberalismo.jpg)'
    carta[posiMarrom[1]].style.background = 'url(imagens/sociologia-neoLiberalismo.jpg)'
    carta[posiMarrom[0]].style.backgroundSize = '100% 100%'
    carta[posiMarrom[1]].style.backgroundSize = '100% 100%'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

        mostrarExplicacao('imagens/sociologia-neoLiberalismo.jpg', '177%', neoliberalismoExplicacao, 'Estado Neoliberal')

    } else {

        setTimeout(function(){

            for(let contadorPares = 0; contadorPares <= 11; contadorPares++) {
                if (carta[posiVermelho[0]] == paresFormados[contadorPares] || carta[posiVermelho[1]] == paresFormados[contadorPares]){
                    verificaVermelho ++
                } 
            }   
            if (verificaVermelho == 0) {
                carta[posiVermelho[0]].style.background = 'white'
                carta[posiVermelho[1]].style.background = 'white'
            }





    for(let contadorPares = 0; contadorPares <= 11; contadorPares++) {
        if (carta[posiAzul[0]] == paresFormados[contadorPares] || carta[posiAzul[1]] == paresFormados[contadorPares]){
            verificaAzul ++
        } 
    }   
    if (verificaAzul == 0) {
        carta[posiAzul[0]].style.background = 'white'
        carta[posiAzul[1]].style.background = 'white'
    }


            for(let contadorPares = 0; contadorPares <= 11; contadorPares++) {
                if (carta[posiVerde[0]] == paresFormados[contadorPares] || carta[posiVerde[1]] == paresFormados[contadorPares]){
                    verificaVerde ++
                } 
            }   
            if (verificaVerde == 0) {
                carta[posiVerde[0]].style.background = 'white'
                carta[posiVerde[1]].style.background = 'white'
            }




            for(let contadorPares = 0; contadorPares <= 11; contadorPares++) {
                if (carta[posiPreto[0]] == paresFormados[contadorPares] || carta[posiPreto[1]] == paresFormados[contadorPares]){
                    verificaPreto ++
                } 
            }   
            if (verificaPreto == 0) {
                carta[posiPreto[0]].style.background = 'white'
                carta[posiPreto[1]].style.background = 'white'
            }



            for(let contadorPares = 0; contadorPares <= 11; contadorPares++) {
                if (carta[posiAmarelo[0]] == paresFormados[contadorPares] || carta[posiAmarelo[1]] == paresFormados[contadorPares]){
                    verificaAmarelo ++
                } 
            }   
            if (verificaAmarelo == 0) {
                carta[posiAmarelo[0]].style.background = 'white'
                carta[posiAmarelo[1]].style.background = 'white'
            }

            for(let contadorPares = 0; contadorPares <= 11; contadorPares++) {
                if (carta[posiMarrom[0]] == paresFormados[contadorPares] || carta[posiMarrom[1]] == paresFormados[contadorPares]){
                    verificaMarrom ++
                } 
            }   
            if (verificaMarrom == 0) {
                carta[posiMarrom[0]].style.background = 'white'
                carta[posiMarrom[1]].style.background = 'white'
            }

        }, 400)
        
    }
}

function voltarJogo() {
    if(paresFormados.length == 12){
        aviso.style.display = 'flex'
        memorize.style.display = 'flex'
        aviso.innerHTML = '<h1>PARABÉNS!</h1>'
        explicacao.style.display = 'none'
    } else{
        memorize.style.display = 'none'
    }
}

function mostrarExplicacao(imagem, width, textoExplicacao, tituloExplicacao) {
    setTimeout (
        function(){
            memorize.style.display = 'flex'
            explicacao.style.display = 'flex'
            aviso.style.display = 'none'
            imgExplicacao.setAttribute('src', imagem)
            imgExplicacao.style.width = width

            pExplicacao.innerText = textoExplicacao
            titulo.innerText = tituloExplicacao
        }, 500
    )
}