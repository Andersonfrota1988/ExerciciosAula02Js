let num = Number(prompt(`Digite um número qualquer:`))

if (num  <= 1){
    console.log(num + "não é um número primo.")
} else{
  let primo = true
  let divisor = 2

  while (divisor * divisor <= num && primo){
    if (num % divisor === 0) {
      primo = false
    }
    divisor ++
}

 if (primo){
  console.log(num + "é um número primo.")
 } else {
  console.log(num + "não é um número primo.")
 }  
}
