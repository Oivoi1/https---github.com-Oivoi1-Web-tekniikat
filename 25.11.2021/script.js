let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
let alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  let wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

// Tarkista onko alertTrigger olemassa
if (alertTrigger) {
    // Luo tapahtumankäsittelijä alertTriggerin click-eventille
    alertTrigger.addEventListener('click', function () {
        // Tarkistetaan onko etunimi syötetty
        if(document.getElementById("firstname").value.length > 0){
            // Kutsutaan funktiota alert
            alert('Nice, you triggered this alert message!', 'success')
        
        }else{// Kutsutaan funktiota alert
        alert('Please enter first name!', 'danger')
        }
  })
}