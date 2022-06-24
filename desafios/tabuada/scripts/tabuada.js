function Tabuada() {
    let num = document.getElementById('txtnum')
    let select = document.getElementById('select')

    if (num.value.length == 0) {
        alert('ERRO: Campo "Número" está com o valor nulo.')

    }else {
        let n = Number(num.value)
        let cont = 1
        select.innerHTML = ''

        while (cont <=10) {
            let tabela = document.createElement('option')
            tabela.text = `${n} x ${cont} = ${n*cont} `
            select.appendChild(tabela)
            cont++
        }
        


    }
    
}