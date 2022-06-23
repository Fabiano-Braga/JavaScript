function carregar() {
    let data = new Date()
    let hora = 20//data.getHours()
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#7ab9f5c9'

    }else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#cb8374'

    }else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#525961'
    }




}