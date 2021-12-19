let button = document.querySelector("button")
let p = document.querySelector("p")

button.addEventListener("click", buttonClicked)
button.addEventListener("click", secondFunction)
button.addEventListener("click", buttonPressed)


function buttonClicked(){
    console.log("12345")
}

function secondFunction(){
    console.log("4321")
}

function buttonPressed(){
    p.style.color = "blue"
    p.style.width = "100px"
    p.style.display = "inline"
}
