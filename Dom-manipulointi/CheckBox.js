document.querySelector("button").addEventListener("click",ok)

let check = document.querySelector("input")

function ok(){
    if(check.checked){
        console.log("valittu")
    }
}