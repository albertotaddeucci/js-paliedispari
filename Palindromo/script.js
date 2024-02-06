/**
 
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
(ad esempio, questa funzione potrebbe funzionare così: 
    passandole la parola come parametro,
    farà i suoi calcoli per capire se è palindroma
 o meno e ci restituirà true o false in base all'esito)

*/


function isPalindrome(input){

    let i = 0;
    let palindrome = false;
    
    do{
            
        if(i>input.length){        
            
           palindrome = true;
            
        } else{
        
            i++;        
        }
    
    
    } while (input[i] === input[input.length-i-1] && palindrome === false )
    
    
    if (palindrome === true){
    
        return true;
    
    } else {
    
        return false;
    
    }
}


const buttonStart = document.getElementById("button-start");
buttonStart.addEventListener("click", function(){
    
    const inputCheck = document.getElementById("input-word").value;
    
    
    if(isPalindrome(inputCheck)){
        document.getElementById("result").innerText = "È palindromo";
        document.getElementById("result").classList = "col-5 bg-success text-white rounded-3 my-3 p-1 text-center";

    } else {
        document.getElementById("result").innerText = "Non è palindromo";
        document.getElementById("result").classList = "col-5 bg-danger text-white rounded-3 my-3 p-1 text-center";


    }
})
