const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "I am really Smart!!!"
let idx = 1
let speed = 275/speedEl.value
speedEl.addEventListener('input', (element) =>{
    speed = 275/element.target.value
})

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
}