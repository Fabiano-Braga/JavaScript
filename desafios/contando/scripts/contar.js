function contar() {
    let Ini = document.getElementById('txtini')
    let Fim = document.getElementById('txtfim')
    let Passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (Ini.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0 ) {
        alert('ERRO: Verifique o formulário e tente novamente...')
        res.innerHTML='ERRO!'

    }else {
        res.innerHTML = 'Contando...<br>'
        let inicio = Number(Ini.value)
        let fim = Number(Fim.value)
        let passo = Number(Passo.value)

        if (passo == 0 ) {
            alert(`Passo inválido! Vamos considerar o passo com o valor 1.`)
            passo = 1

        }if (inicio < fim) {
            for (cont = inicio; cont <= fim; cont += passo) {
            res.innerHTML +=` ${cont}, `

        }
        }else{
            for (cont = inicio; cont >= fim; cont -= passo) {
                res.innerHTML += `${cont}, `
            }
        }
    res.innerHTML +='FIM!'
    }
}