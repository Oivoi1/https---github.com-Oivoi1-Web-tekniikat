
function sendMessage(msg, encoder){
    // Valmistelua 
    // Erilaisia toimenpiteit√§
    msg = encoder(msg)
    console.log(msg);
}

 const myEnc = function(message){
    message += "JotainDataa"
    return message;
}

function specialEncoder(m){
    m += "yam"
    return m;
}

sendMessage("Hello!", myEnc)
