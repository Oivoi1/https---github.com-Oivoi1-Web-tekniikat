let button = document.querySelector("button")
let div = document.querySelector("div")
let body = document.querySelector("body")
let input = document.querySelector("input")

button.addEventListener("click", divColor)
button.addEventListener("click", bodyColor)

function divColor(){
    div.classList.toggle("color")
}


function bodyColor(){
    div.style.backgroundColor = input.value
}

let list = document.querySelectorAll("li")
for (const i of list) {
    if(i.textContent.includes("important", 1)){
        i.classList.add("important")
    }
}
    




