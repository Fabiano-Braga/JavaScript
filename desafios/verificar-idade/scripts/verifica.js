function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc  = document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = ano - nasc.value
    var sexo = document.getElementsByName('radiosex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
   
    if (nasc.value.length == 0 || nasc.value > ano) {
        alert(`ERRO: Verifique os dados e tente novamente... `)

    }else {
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-menino.png')

            }else if (idade <= 21) {
                img.setAttribute('src', 'imagens/jovem-homem.png')

            }else if (idade <= 50) {
                img.setAttribute('src', 'imagens/adulto-homem.png')

            }else {
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        }
        
        else {
            genero = 'Feminino'
            if(idade >=0 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-menina.png')

            }else if (idade <= 21) {
                img.setAttribute('src', 'imagens/jovem-mulher.png')

            }else if (idade <= 50) {
                img.setAttribute('src', 'imagens/adulto-mulher.png')

            }else {
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.padding ='10px'
        res.innerHTML = `Detectamos pessoa do sexo ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
    
}