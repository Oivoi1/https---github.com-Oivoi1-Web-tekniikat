let form = document.getElementById("userinfo")

form.addEventListener("submit", submitInfo)


/**
 * 
 * @param {Event} event 
 */
function submitInfo(event){
    event.preventDefault()

    let formData = new FormData(form)

    console.log(formData.get("fname"))
    console.log(formData.get("lang"))
    console.log(formData.get("fav_code"))
}