let lado1 = parseFloat(prompt(`Digite o comprimento do primeiro lado do triângulo:`))

let lado2 = parseFloat(prompt(`Digite o comprimento do segundo lado do triângulo:`))

let lado3 = parseFloat(prompt(`Digite o comprimento do terceiro lado do triângulo:`))

if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
    console.log (`O seu triângulo é Equilátero.`)
}

else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log (`O seu triângulo é Isóceles.`)
}

else{
    console.log(`O seu triângulo é Escaleno.`)
}

