/* var pariOdispari = prompt('scegli pari o dispari');
console.log(pariOdispari);
var numeroPrimo = parseInt(prompt('scegli un numero'));
console.log(numeroPrimo);
var numeroSecondo = Math.floor(Math.random() * 6);
console.log(numeroSecondo);
var somma = (numeroPrimo) + (numeroSecondo);
console.log(somma);
if (somma % 2 == 0) {
    console.log('ha vinto il pari');
    if (pariOdispari == 'pari') {
        console.log('complimenti hai vinto');
    }
    else {
        console.log('mi spiace,hai perso');
    }

}
else {
    console.log('ha vinto il dispari');
    if (pariOdispari == 'dispari') {
        console.log('complimenti hai vinto');

    }
    else {
        console.log('mi dispiace hai perso');
    }
} */

/* var parola = prompt('scrivi una parola');

    if (parola.split("").reverse().join("") === parola) {
        console.log('è palindromo');
    }
    else {
        console.log('non è palindromo');
    }
*/

var parola = prompt('scrivi una parola');
function isPalindrome(parola) {
    var parolaLower = parola.toLowerCase();
    var reverseParola = parolaLower.split('').reverse().join('');
    return reverseParola === parolaLower;
}

if (isPalindrome(parola)) {
    console.log('è palindroma');
}
else {
    console.log('non è palindroma');
}
