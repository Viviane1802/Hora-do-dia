function carregar() {

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    var img = window.document.getElementById('imagem')


    if (hora >= 0 && hora < 12) {
        window.alert(`São exatamente ${hora} horas e ${min} minutos. Bom dia!`)
        img.src = "manha_ok.jpg"


    } else if (hora >= 12 && hora < 18) {
        window.alert(`São exatamente ${hora} horas e ${min} minutos. Boa Tarde!`)
        img.src = "tarde_ok.jpg"

    } else {
        window.alert(`São exatamente ${hora} horas e ${min} minutos. Boa Noite!`)
        img.src = "noite_ok.jpg"
    }

}