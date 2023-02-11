
// Variables
const mainScreen = document.querySelector(".main-screen")
const resultScreen = document.querySelector(".result-screen")
const tryInput = document.querySelector("#tryInput")
const btnTry = document.querySelector("#btnTry")
const triesList = document.querySelector("#triesList")
const btnRestart = document.querySelector("#btnRestart")
const toastAlert = document.querySelector("#toastAlert")
const randomNumber = Math.round(Math.random() * 10)
const min = 0
const max = 10

let tries = []
tryInput.focus()
console.log(randomNumber)


// Events
btnTry.addEventListener('click', handleTryClick)
btnRestart.addEventListener('click', handleRestartClick)



// Functions
function between(number, min, max){
    return number >= min && number <= max
}


function toastHandler(alertMSG) {
    toastAlert.innerText = alertMSG
    toastAlert.classList.add("show")
    setTimeout(()=>{toastAlert.classList.remove("show"); }, 2000);
  }


function handleTryClick(event){
    event.preventDefault()

    const numberInput = Number(tryInput.value)

    if(isNaN(numberInput) || !between(numberInput,min,max)) {
        tryInput.value = ""
        msg = "Just numbers from 0 to 10, please."
        toastHandler(msg)
        return
    }
    
    if(tries.includes(numberInput)) {
        tryInput.value = ""
        msg = "Repeated guess. Try another."
        toastHandler(msg)
        return
    }
    
    tries.push(numberInput)
    triesList.innerText = `Tried: [${tries}]`
    tryInput.value = ""

    
    if(numberInput == randomNumber){
        mainScreen.classList.add("hide")
        resultScreen.classList.remove("hide")

        resultScreen
        .querySelector("h2")
        .innerText = `You hit it in ${tries.length} tries`

        btnRestart.focus()
    }
    

}

function handleRestartClick(event){
    event.preventDefault()
    location.reload()
}

