// Haetaan dokumentin elementit
let body = document.querySelector("body")
// Lisätään napin kuuntelijafunktio
let form = document.querySelector("form")
form.addEventListener("click", addNote)

function addNote(event){
event.preventDefault()

formData = new FormData(form)

    // Luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h3 = document.createElement("h3")
    h3.textContent = (formData.get("name")) + new Date().toLocaleString()
    // Itse note lisätään tekstinä p-elementtiin textareasta
    let p = document.createElement("p")
    p.textContent = (formData.get("note"))

    console.log(formData.check)
    /*
    // Jos checkbox valittu, lisätään important muotoilu
    if(checkbox.checked){
        h3.classList.add("check")
        p.classList.add("check")
    }
    */
    // Kaikki elementit uusina bodyn sisälle
    body.append(h3,p, document.createElement("hr"))
    
}

