// Let's create a HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","https://yesno.wtf/api/",true);
// Send request
xmlhttp.send();

// Let's create an event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
        let answerObject = JSON.parse(xmlhttp.response);
        document.getElementById("answer").innerHTML= answerObject.answer;
        document.getElementById("answer-image").setAttribute("src",answerObject.image);
    }
}
  