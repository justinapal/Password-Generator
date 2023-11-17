let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pswd1El = document.getElementById("pswd-field1")
let pswd2El = document.getElementById("pswd-field2")

let noSymbolsChecked = document.getElementById("symbols")
console.log(noSymbolsChecked.checked)

let noNumbersChecked = document.getElementById("numbers")
console.log(noNumbersChecked.checked)

function getVal() {
    return document.getElementById("pswd-length").value
}

function renderPassword() {
    pswd1El.textContent = ""
    pswd2El.textContent = ""
    generatePassword()
} 

function generatePassword(){
    let userInput = getVal()

    let charactersCopy = characters.slice()
    
    if(noSymbolsChecked.checked) {
        let symbolsToExclude = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
        charactersCopy = charactersCopy.filter(char => symbolsToExclude.indexOf(char) === -1)
    }

    if(noNumbersChecked.checked) {
        charactersCopy = charactersCopy.filter(char => isNaN(parseInt(char)));
    }

    if (userInput >= 6 && userInput <= 15) {
     for(let i = 0; i < userInput;  i ++ ){
     let randomIndex1 = Math.floor(Math.random() * charactersCopy.length)
    let randomIndex2 = Math.floor(Math.random() * charactersCopy.length)
    pswd1El.textContent += charactersCopy[randomIndex1]
    pswd2El.textContent += charactersCopy[randomIndex2]}
    } 
    else {
     for(let i = 0; i < 15;  i ++ ){
     let randomIndex1 = Math.floor(Math.random() * charactersCopy.length)
    let randomIndex2 = Math.floor(Math.random() * charactersCopy.length)
    pswd1El.textContent += charactersCopy[randomIndex1]
    pswd2El.textContent += charactersCopy[randomIndex2] }
     }
 }

 pswd1El.addEventListener("click", () => {

    let content1 = document.getElementById("pswd-field1").textContent
    
    navigator.clipboard.writeText(content1)
    
    .then(() => {
        alert("Password copied to clipboard!")
    })
    .catch((err) => {
        console.error("Unable to copy to clipboard", err)
    });
})

pswd2El.addEventListener("click", () => {

    let content2 = document.getElementById("pswd-field2").textContent
    
    navigator.clipboard.writeText(content2)
    
     .then(() => {
        alert("Password copied to clipboard!")
    })
    .catch((err) => {
        console.error("Unable to copy to clipboard", err)
    });
})