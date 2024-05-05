
let precoProduto = (prompt(`Digite o preço do produto:`))

let idadeUsuario = prompt(`Digite sua idade:`)

if (idadeUsuario <18){
    let precoFinal = precoProduto*0.90
    console.log(`Você tem idade inferior a 18 anos, você ganhou 10% de desconto`)
    console.log(`O preço com desconto é de R$ ${precoFinal.toFixed(2)}`)
} 
else {
    console.log(`Você não tem desconto por sua idade ser superior a 18 anos`)
    console.log(`O preço do produto é R$ ${precoProduto}`)
}

