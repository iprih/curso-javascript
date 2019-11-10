//dias da semana: 0 = dom, 1 = seg, 2 = ter, 3 - qua, 4 - qui, 5 - sex, 6- sab
var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Hoje é domingo, acabou o fds :(')
        break
    case 1:
        console.log('Hoje é segunda, odeio segunda...')
        break
    case 2:
        console.log('Hoje é terça, ranço')
        break
    case 3:
        console.log('Hoje é quarta, nao aguento')
        break
    case 4:
        console.log('Hoje é quinta, aaaa')
        break
    case 5:
        console.log('Hoje é sexta, sextou')
        break
    case 6:
        console.log('Hoje é sabado, irruuuu')
        break
    default:
        console.log('Erro, dia da semana invalido')
}
