let num = document.getElementById('txtnum')
let select = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        alert('tudo ok!')
    }else {
        alert('não ok!')
    }
}

function isNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }

}

function finalizar() {

}

function zerar() {

}