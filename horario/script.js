function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
   var hora = 6
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#add8e6'
    } else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#F4A460'
    } else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#4682b4'
    }
}