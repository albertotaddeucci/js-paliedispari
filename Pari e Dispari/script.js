/**
 
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) 
della somma ha vinto, altrimenti ha perso.

*/

const buttonStart = document.getElementById("start")

// funzione random
function randomGenPc(){
    const random = Math.floor(Math.random()*5)+1;
    return random;
}

//funzione pari o dispari
function oddOrEven(number){
    
    if(number%2 == 0){        
        return  "pari"
    } else {
        return "dispari"
    }
    
}


buttonStart.addEventListener("click",
function(){

    const userChoice = document.getElementById("user-choice").value;
    const userNumber = Number(document.querySelector("#user-number").value);
    
    let pcNumber = randomGenPc()
    let sum = userNumber + pcNumber
  

    document.getElementById("sum").innerText = `Il PC ha scelto ${pcNumber}, quindi la somma è ${sum}`;

    if (userNumber>5 || userNumber<0 || isNaN(userNumber)){
        alert("Inserisci un numero corretto!");
        
    
    } else if (userChoice!=="pari"&& userChoice!=="dispari"){
        alert("Inserisci la parola corretta!") ; 
    
     
    } else if (userChoice === oddOrEven(sum)) {
        document.getElementById("result").innerText = "Hai vinto!";
        document.getElementById("result").classList = "bg-success text-center text-white rounded-3 mt-3 p-1";

    
    } else {
        document.getElementById("result").innerText = "Hai perso!";
        document.getElementById("result").classList = "bg-danger text-center text-white rounded-3 mt-3 mb-3 p-1";

    
    
    }


})



