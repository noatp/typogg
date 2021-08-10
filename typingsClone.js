
const textPanel = document.getElementById("textPanel")
const textInput = document.getElementById("textInput")
const wordLibrary = ['will', 'early', 'tell', 'how', 'do', 'and', 'possible', 'consider', 'on', 'some', 'late', 'program', 'against', 'about', 'now', 'under', 'fact', 'nation', 'there', 'no', 'during', 'first', 'not', 'part', 'I', 'own', 'there', 'those', 'another', 'leave', 'as', 'last', 'between', 'say', 'end', 'seem', 'some', 'head', 'good', 'again', 'have', 'be', 'can', 'as', 'part', 'back', 'increase', 'hold', 'this', 'high', 'home', 'too', 'by', 'since', 'by', 'both', 'since', 'down', 'another', 'want', 'old', 'all', 'will', 'may', 'from', 'without', 'thing', 'we', 'would', 'good', 'help', 'in', 'also', 'however', 'mean', 'now', 'only', 'part', 'both', 'move', 'think', 'keep', 'while', 'to', 'might', 'come', 'early', 'make', 'this', 'both', 'can', 'eye', 'ask', 'little', 'great', 'again', 'they', 'own', 'may', 'now', 'will', 'some', 'or', 'first', 'very', 'life', 'thing', 'like', 'do', 'point', 'large', 'since', 'course', 'thing', 'hand', 'thing', 'become', 'up', 'even', 'would', 'real', 'work', 'into', 'against', 'make', 'same', 'which', 'mean', 'only', 'house', 'be', 'by', 'however', 'write', 'another', 'line', 'child', 'of', 'because', 'which', 'long', 'even', 'give', 'good', 'ask', 'school', 'look', 'will', 'present', 'own', 'stand', 'group', 'be', 'it', 'down', 'world', 'all', 'write', 'world', 'against', 'a', 'too', 'never', 'order', 'turn', 'seem', 'tell', 'mean', 'present', 'should', 'here', 'much', 'make', 'new', 'change', 'follow', 'need', 'home', 'how', 'large', 'system', 'long', 'more', 'all', 'around', 'you', 'think', 'become', 'last', 'at', 'just', 'mean', 'begin', 'from', 'they', 'we', 'under', 'new', 'from', 'he', 'lead', 'write', 'school', 'few', 'line', 'because', 'under', 'what', 'not', 'consider', 'some', 'school', 'turn', 'as', 'early', 'change', 'give', 'it', 'world', 'for', 'too', 'into', 'keep', 'new', 'become', 'not', 'will', 'by', 'run', 'fact', 'or', 'fact', 'public', 'without', 'high', 'line', 'into', 'problem', 'course', 'the', 'after', 'take', 'mean', 'could', 'how', 'like', 'form', 'between', 'point', 'part']

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

