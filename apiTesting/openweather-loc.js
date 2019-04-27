var openWeatherMap = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=chicago,us&units=imperial&appid=" + APIKey;
if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(openWeatherMap, {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: 'metric',
            APPID: 'APIKEY'
        }).done(function(weather) {
            console.log(weather)
        })
    })
}