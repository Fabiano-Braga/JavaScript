let cliqueBtn = document.getElementById('btnClick')
let zerarBtn = document.getElementById('btnZerar')
let res = document.getElementById('res')
let cont = 0


function Click() {
    cont += 1
    res.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`
}

function Zerar() {
    cont = 0 
    res.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`
}