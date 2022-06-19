function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc  = document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = ano - nasc.value
    var sexo = document.getElementsByName('radiosex')
    var genero = ''
   
    if (nasc.value.length == 0 || nasc.value > ano) {
        alert(`ERRO: Verifique os dados e tente novamente... `)
    }else {
        if (sexo[0].checked) {
            genero = 'Homem'
        }else {
            genero = 'Mulher'
        }
    }
    res.innerHTML = `${genero} `

    
}