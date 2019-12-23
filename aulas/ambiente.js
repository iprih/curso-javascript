let num = [9, 1, 2, 3]
console.log(`O vetor original é ${num} e a quantidade é ${num.length}`)

num.push(7) // acrescentando numero no vetor
console.log(`Incluindo o numero 7 no vetor: ${num}`)

console.log(`A quantidade é dentro do vetor agora é ${num.length}`)

console.log(`Ordenando o vetor: ${num.sort()}`)

console.log(`Pegando o segundo valor do vetor: ${num[1]}`)


console.log('informações do vetor: ')
let valores = [8,9,5,8]
for (let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor de ${valores[i]}`)
}

console.log('ou mais simplificado: ')
for(let i in valores){//para cada posição na variavel composta mostra o valor
    console.log(`A posição ${i} tem o valor de ${valores[i]}`)
}