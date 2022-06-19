function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc  = document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = ano - nasc.value
    var sexo = document.getElementsByName('radiosex')
   
    if (nasc.value.length == 0 || nasc.value > ano) {
        alert(`ERRO: Verifique os dados e tente novamente... `)
    }

    
}