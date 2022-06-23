function contar() {
    let Ini = document.getElementById('txtini')
    let Fim = document.getElementById('txtfim')
    let Passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (Ini.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0 ) {
        alert('ERRO: Verifique o formulário e tente novamente...')

    }else {
        res.innerHTML = 'Contando...<br>'

    }

}