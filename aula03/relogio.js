// declarando variáveis para modificar
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

// o 'setInterval()' serve para contar
const relogio = setInterval( function time() {
    // o 'Date()' serve para atualizar o dia
    let date = new Date()

    // o 'getHours' pega a hora atual
    let hora = date.getHours()
    let min = date.getMinutes()
    let seg = date.getSeconds()

    // condição para adicionar a string 0
    if (hora < 10) {hora = "0" + hora}
    if (min < 10) {min = "0" + min}
    if (seg < 10) { seg = "0" + seg}

    // acrescentando no conteúdo o tempo
    horas.innerHTML = hora
    minutos.innerHTML = min
    segundos.innerHTML = seg

}, 1000) // o intervalo de tempo é '1000' que no caso é 1 segundo