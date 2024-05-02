/*solicitar credencial div*/

function solicitar () {
    document.getElementById('aba-solicitar').style.display = "block"
}

/*checkin/out alterar datas*/

function alterarDatas () {
    document.querySelector('.alterar-js').style.display = "block"
}

/*navegação pelo painel dos hóspedes*/

function minhaReserva () {
    var divReserva = document.querySelector('.minha-reserva')
    var hiddenDiv1 = document.querySelector('.cafe-manha')
    var hiddenDiv2 = document.querySelector('.lazer')

    if (divReserva = divReserva) {
        divReserva.style.display = "block"
        hiddenDiv1.style.display = "none"
        hiddenDiv2.style.display = "none"
    } else {
        divReserva.style.display = "none"
    }
}

function cafeManha () {
    var divCafe = document.querySelector('.cafe-manha')
    var hiddenDiv1 = document.querySelector('.minha-reserva')
    var hiddenDiv2 = document.querySelector('.lazer')

    if (divCafe = divCafe) {
        divCafe.style.display = "block"
        hiddenDiv1.style.display = "none"
        hiddenDiv2.style.display = "none"
    } else {
        divCafe.style.display = "none"
    }
}

function lazer () {
    var divLazer = document.querySelector('.lazer')
    var hiddenDiv1 = document.querySelector('.minha-reserva')
    var hiddenDiv2 = document.querySelector('.cafe-manha')

    if (divLazer = divLazer) {
        divLazer.style.display = "block"
        hiddenDiv1.style.display = "none"
        hiddenDiv2.style.display = "none"
    } else {
        divLazer.style.display = "none"
    }
}