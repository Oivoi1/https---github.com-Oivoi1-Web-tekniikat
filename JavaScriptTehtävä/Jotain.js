function getWeather() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	    let weather = JSON.parse(this.response) 
        // Access the result here
        let country = weather.location.country;
	    let city = weather.location.name;
        let tempature = weather.current.temp_c;
        let tempatureFeels = weather.current.feelslike_c;
        let wind =Math.floor(weather.current.wind_kph*0.28);
        document.getElementById("city").innerHTML = "City: " + city + "<br>" + country
        document.getElementById("temperature").innerHTML = "Temperature: " + tempature + "°C"
        document.getElementById("temperatureFeels").innerHTML = "feels like: " + tempatureFeels + "°C"
        document.getElementById("wind").innerHTML = "wind: " + wind + " m/s"
        document.getElementById("icon").setAttribute("src", weather.current.condition.icon)
        
	 }
    };
    if(document.getElementById("oulu").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Oulu&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("paris").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Paris&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("tamatave").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Tamatave&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("jakutsk").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Jakutsk&aqi=no",true);
        // Send request
        xhttp.send();
    }
    else if(document.getElementById("utajärvi").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Utajarvi&aqi=no",true);
        // Send request
        xhttp.send();
    }
}



/*let weatherInfo = "In " + city + " there is " + tempature + " degree celcius and it feels like " + tempatureFeels + " degree celcius. " + " Wind speed is " + wind + "m/s"
        document.getElementById("weatherInfo").innerHTML = weatherInfo*/