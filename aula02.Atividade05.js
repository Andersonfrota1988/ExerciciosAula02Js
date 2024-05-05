let numeroDia = parseFloat(prompt(`Digite um número de 1 a 7:`))

switch (numeroDia){
    case 1:
        console.log(`O dia da semana é Domingo.`)
        break;

    case 2:
        console.log(`O dia da semana é segunda feira.`)
        break;

    case 3:
        console.log(`O dia da semana é terça feira.`)
        break;

    case 4:
        console.log(`O dia da semana é quarta feira.`)
        break;

    case 5:
        console.log(`O dia da semana é quinta feira.`)
        break;

    case 6:
        console.log(`O dia da semana é sexta feira.`)
        break;

    case 7:
        console.log(`O dia da semana é sábado.`)
        break;
    
    default:
        console.log(`Você digitou um número diferente do solicitado.`)

}