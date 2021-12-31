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
        document.getElementById("city").innerHTML = "City: " + city + "," + "<br>" + country
        document.getElementById("temperature").innerHTML = "Temperature: " + tempature + "°C"
        document.getElementById("temperatureFeels").innerHTML = "feels like: " + tempatureFeels + "°C"
        document.getElementById("wind").innerHTML = "wind: " + wind + " m/s"
        document.getElementById("icon").setAttribute("src", weather.current.condition.icon)
        document.getElementById("weather").innerHTML = ""

        if(tempature<-25 && tempature<-16){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, if you go outside dress warm!"
        }
        if(tempature>-15 && tempature<-11 ){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, "
        }
        if(tempature>-10 && tempature<-6){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, perfect weather for winter sports!"
        }
        if(tempature>-5 && tempature<0 ){
            document.getElementById("weather").innerHTML = "0c/-5c"
        }
        if(tempature<0 && tempature>5){
            document.getElementById("weather").innerHTML = "0c/5c"
        }
        if(tempature<5 && tempature>9){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, "
        }
        if(tempature>10 && tempature<14){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, you might need a jacket "
        }
        if(tempature>=15 && tempature<20){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, good weather for a walk. "
        }
        if(tempature>20){
            document.getElementById("weather").innerHTML = "It is " + tempature + "°C, drink plenty of water! "
        }
        if(tempature>10 && wind>2 && wind<5){
            document.getElementById("weather").innerHTML += "The wind and temperature are perfect for flying a kite"
        }
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
    else if(document.getElementById("raahe").selected == true){
        xhttp.open("GET","http://api.weatherapi.com/v1/current.json?key=577191a56a1a41f2ab2152650211512&q=Raahe&aqi=no",true);
        // Send request
        xhttp.send();

        
    }
    }







/*let weatherInfo = "In " + city + " there is " + tempature + " degree celcius and it feels like " + tempatureFeels + " degree celcius. " + " Wind speed is " + wind + "m/s"
        document.getElementById("weatherInfo").innerHTML = weatherInfo*/