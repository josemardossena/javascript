function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.Value == 0 || Number(fano.value) > ano) {
        window.alert('[erro] verifique os dados digitados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem' 
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeh.png')
        } else if (idade < 18) {
                img.setAttribute('src', 'jovemh.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'adultoh.png')
        } else {
            img.setAttribute('src', 'idosoh.png')
        }



        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebem.png')
        } else if (idade < 18) {
                img.setAttribute('src', 'jovenm.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'adultom.png')
        } else {
            img.setAttribute('src', 'idosom.png')
        }
        }
        res.innerHTML = `detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }

}