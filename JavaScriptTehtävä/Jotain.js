function getWeather() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	    let weather = JSON.parse(this.response) 
        // Access the result here
	    let city = weather.location.name;
        let tempature = weather.current.temp_c;
        let tempatureFeels = weather.current.feelslike_c;
        let wind =Math.floor(weather.current.wind_kph*0.28);
        let weatherInfo = "In " + city + " there is " + tempature + " degree celcius and it feels like " + tempatureFeels + " degree celcius. " + " Wind speed is " + wind + "m/s"
        document.getElementById("weatherInfo").innerHTML = weatherInfo
	 }
    };
    xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Oulu&aqi=no",true);
    // Send request
    xhttp.send();
}

getWeather()

