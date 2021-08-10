
const textPanel = document.getElementById("textPanel")
const textInput = document.getElementById("textInput")
const wordLibrary = ["test", "hello", "welcome"]

let currentSpan = null
let spanQueue = []

let difficulty = 50; //number of words

generateTextPanel()
getNextWord()

document.addEventListener(
    'keyup',
    function (event) {
        if (event.code === "Space") {
            if (textInput.value === currentWord) {
                gotACorrectWord()
            }
            else {
                gotAWrongWord()
            }
            textInput.value = ""
        }

        if (textInput.value !== currentWord.slice(0, textInput.value.length)) {
            gotAWrongCharacter()
        }
        else {
            gotACorrectCharacter()
        }
    }
)

function gotACorrectWord() {
    currentSpan.style.color = "rgb(74,116,36)"
    getNextWord()
}

function gotAWrongWord() {
    currentSpan.style.color = "rgb(129,84,88)"
    getNextWord()
}

function gotAWrongCharacter() {
    textInput.style.backgroundColor = "rgb(129,84,88)"
}

function gotACorrectCharacter() {
    textInput.style.backgroundColor = "rgb(111,119,120)"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateTextPanel() {
    spanQueue = []
    for (let i = 0; i < difficulty; i++) {
        let aWord = wordLibrary[getRandomInt(0, wordLibrary.length)]
        const newSpan = document.createElement("span")
        newSpan.textContent = `${aWord} `
        textPanel.append(newSpan)
        spanQueue.push(newSpan)
    }
}

function getNextWord() {
    currentSpan = spanQueue.shift()
    currentWord = currentSpan.textContent
    currentSpan.style.color = "rgb(243,166,35)"
}

