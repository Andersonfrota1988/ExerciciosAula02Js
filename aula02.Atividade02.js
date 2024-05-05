let peso = parseFloat(prompt(`Digite o seu peso em kg:`))

let altura = parseFloat(prompt(`Digite sua altura em metros:`))

let IMC = peso/ altura **2;

if (IMC < 17) {
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está muito abaixo do peso.`)
}

else if (IMC >= 17 && IMC <= 18.49){
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está abaixo do peso.`)
}

else if (IMC >= 18.50 && IMC <= 24.99){
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está com peso normal.`)
}
else if (IMC >= 25 && IMC <= 29.99){
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está acima do peso.`)
}
else if (IMC >= 30 && IMC <= 34.99){
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está com Obesidade I.`)
}
else if (IMC >= 35 && IMC <= 39.99){
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está com Obesidade II.`)
}
else {
    console.log(`O seu IMC é ${IMC.toFixed(2)}, você está com Obesidade III.`)
}
