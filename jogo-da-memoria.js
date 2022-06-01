/* FEITO POR JOÃO PEDRO MARTINELLI */

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

var verificaVermelho = 0
var verificaAzul = 0
var verificaVerde = 0
var verificaPreto = 0
var verificaAmarelo = 0
var verificaMarrom = 0

var explicacao = document.getElementById('explicacao')
var memorize = document.getElementById('alerta_comeco')
var aviso = document.getElementById('aviso')

function controladora() {
    setTimeout (
        function() {
            memorize.style.display = 'none'
        },
        4000
    )
    setTimeout (
    function() {atribuiID()
    atribuiPares()
    visualizacao()
    },
    4000
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

    carta[posiAzul[0]].style.background = 'blue'
    carta[posiAzul[1]].style.background = 'blue'

    carta[posiVerde[0]].style.background = 'green'
    carta[posiVerde[1]].style.background = 'green'

    carta[posiPreto[0]].style.background = 'black'
    carta[posiPreto[1]].style.background = 'black'

    carta[posiAmarelo[0]].style.background = 'yellow'
    carta[posiAmarelo[1]].style.background = 'yellow'

    carta[posiMarrom[0]].style.background = 'brown'
    carta[posiMarrom[1]].style.background = 'brown'

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
    mudaEstado(c)
    armazenaSelecionados(c)
    
    if (cartasSelecionadas.length == 2) {
        verificadorIgualdade(cartasSelecionadas)
        voltaEstado(cartasSelecionadas)
        cartasSelecionadas = []
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
        carta[c].style.background = 'blue'
    } else if (c == posiVerde[0] || c == posiVerde[1]) {
        carta[c].style.background = 'green'
    } else if (c == posiPreto[0] || c == posiPreto[1]) {
        carta[c].style.background = 'black'
    } else if (c == posiAmarelo[0] || c == posiAmarelo[1]) {
        carta[c].style.background = 'yellow'
    } else if (c == posiMarrom[0] || c == posiMarrom[1]) {
        carta[c].style.background = 'brown'
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
        setTimeout (
            function(){
                memorize.style.display = 'flex'
                explicacao.style.display = 'flex'
                aviso.style.display = 'none'
            }, 1000
        )

    } else if (cartasSelecionadas[0] == cartasAzuis[0] && cartasSelecionadas[1] == cartasAzuis[1] || cartasSelecionadas[1] == cartasAzuis[0] && cartasSelecionadas[0] == cartasAzuis[1]) {

        carta[posiAzul[0]].style.background = 'blue'
        carta[posiAzul[1]].style.background = 'blue'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])
        
    } else if (cartasSelecionadas[0] == cartasVerde[0] && cartasSelecionadas[1] == cartasVerde[1] || cartasSelecionadas[1] == cartasVerde[0] && cartasSelecionadas[0] == cartasVerde[1]) {
       
        carta[posiVerde[0]].style.background = 'green'
        carta[posiVerde[1]].style.background = 'green'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

    } else if (cartasSelecionadas[0] == cartasPreto[0] && cartasSelecionadas[1] == cartasPreto[1] || cartasSelecionadas[1] == cartasPreto[0] && cartasSelecionadas[0] == cartasPreto[1]) {

        carta[posiPreto[0]].style.background = 'black'
        carta[posiPreto[1]].style.background = 'black'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

    } else if (cartasSelecionadas[0] == cartasAmarelo[0] && cartasSelecionadas[1] == cartasAmarelo[1] || cartasSelecionadas[1] == cartasAmarelo[0] && cartasSelecionadas[0] == cartasAmarelo[1]) {

        carta[posiAmarelo[0]].style.background = 'yellow'
        carta[posiAmarelo[1]].style.background = 'yellow'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

    } else if (cartasSelecionadas[0] == cartasMarrom[0] && cartasSelecionadas[1] == cartasMarrom[1] || cartasSelecionadas[1] == cartasMarrom[0] && cartasSelecionadas[0] == cartasMarrom[1]) {

        carta[posiMarrom[0]].style.background = 'brown'
        carta[posiMarrom[1]].style.background = 'brown'
        paresFormados.push(cartasSelecionadas[0])
        paresFormados.push(cartasSelecionadas[1])

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