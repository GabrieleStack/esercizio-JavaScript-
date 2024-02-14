//ESERCIZIO 1

let num1 = 14

let num2 = 22

if (num1 > num2) {
    console.log(num1 + " è più grande di " + num2)
} else {
    console.log(num2 + " è più grande di " + num1);
}

//ESERCIZIO 2

const num = 18

if (num < 5) {
    console.log("Tiny");
} else if (num < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}


//ESERCIZI SUI CICLI: 

//ESERCIZIO 3

for ( let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8) {
        continue
    } else console.log(i);
}

//ESERCIZIO 4

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
    console.log( i + " è pari");
    } else {
    console.log( i + " è dispari");
    }  
}
  

//ESERCIZIO EXTRA 1

let numA = 14
let numB = 3
if (numA === 8 || numB === 8 || numA + numB === 8 || numA - numB === 8) {
    console.log("uno dei casi si è verificato");
}
//( Se mettiamo numA = 4 e numB = 4 il console log uscirà)


//ESERCIZIO EXTRA 2

let totaleShoppingCart = 45
let spedition = 10
let totalConSpedizione = 0

if (totaleShoppingCart > 50) {
    totalConSpedizione = totaleShoppingCart
} else {
    totalConSpedizione = totaleShoppingCart + spedition
}

//ESERCIZIO EXTRA 3

let totalShoppingCart = 45
let spedizione = 10
let totaleConSpedizione = 0
let totaleConSconto = (totalShoppingCart * 20) / 100

if (totaleConSconto > 50) {
    totaleConSpedizione = totaleConSconto
} else { 
    totaleConSpedizione = totaleConSconto + spedizione
}

//ESERCIZIO EXTRA 4 

let gender
let isMale = true
 
if (isMale) {
    gender = "male"
}   else {
    gender = "female"
}  

isMale ? (gender ="male") : (gender = "female")

console.log(gender); 

//ESERCIZIO EXTRA 5


for (i = 1; i <= 100; i++) {
    let numeroMultiploTre = i % 3 === 0
    let numeroMultiploCinque = i % 5 === 0
    let risultatoDaStampare = i
    if (numeroMultiploCinque && numeroMultiploTre) {
        risultatoDaStampare ="FizzBuzz"
    } else if (numeroMultiploCinque) {
        risultatoDaStampare = "Buzz"
    } else if (numeroMultiploTre) {
        risultatoDaStampare = "Fizz"
    } 
    console.log(risultatoDaStampare);

}


