const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

const btn = document.querySelector("#passgen")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let inputLength = document.querySelector("#length")
let useSymbols = document.querySelector("#symbols")
let useNumbers = document.querySelector("#numbers")

btn.addEventListener("click", () => {
    let characterSet = [...letters]

    if(useNumbers.checked && !useSymbols.checked) {
        characterSet = numbers
    }

    if (useSymbols.checked && !useNumbers.checked) {
        characterSet = symbols
    }

    if(useNumbers.checked && useSymbols.checked) {
        characterSet = characterSet.concat(numbers, symbols)
    }

    

    const length = parseInt(inputLength.value)

    if (isNaN(length) || length <= 0){
    alert("Please type the length of password.")
    return;
}

    let randomString = ""
    let randomString2 = ""

    for(let i = 0; i < length; i++){
        const randomCharacter = characterSet[Math.floor(Math.random()* characterSet.length)]
        const randomCharacter2 = characterSet[Math.floor(Math.random()* characterSet.length)]
        randomString += randomCharacter
        randomString2 += randomCharacter2
    }
    input1.value = randomString
    input2.value = randomString2
})


function copyText() {
    input1.select()
    input1.setSelectionRange(0, 99999)

    document.execCommand("copy")

    alert(`Copied the text: " ${input1.value} "`)
}

function copyText2() {
    input2.select()
    input2.setSelectionRange(0, 99999)

    document.execCommand("copy")

    alert(`Copied the text: ${input2.value}`)
}
