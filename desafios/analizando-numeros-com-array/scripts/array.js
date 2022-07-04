let num = document.getElementById('txtnum')
let select = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        select.appendChild(opt)
        opt.text = `Valor ${num.value} adicionado.`
        res.innerHTML =''
        
    }else {
        alert(`Valor ${num.value} inválido ou já encontrado na lista.`)
    }
    num.value =''
    num.focus()
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
    if (valores.length == 0) {
        alert('Não é possivel finalizar sem adicionar nenhum valor!')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos])
        }
    }

            if(valores[pos] > maior) {
                maior = valores[pos]
            }if (valores[pos] < menor) {
                menor = valores[pos]
        }
     }
    media = soma / tot
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += ` <p>O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

function zerar() {

}