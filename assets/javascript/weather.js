
var APIKey = "c8bcf8bb7a6d8ef744d855a989993230";


// Here we are building the URL we need to query the database
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=chicago,illinois&units=imperial&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {


  // Variables for Weather Information
  let wDesc = response.weather[0].description;
  let temp = response.weather[0].description;

  var icon = response.weather[0].icon
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png"

  var tempBase = Math.round(response.main.temp);

  var sunset = response.sys.sunset
  var time = moment.unix(sunset).format("HH: mm");
  

  // Create CODE HERE to dump the temperature content into HTML
  $("#sunset").text(time);
  $("#temp").text(tempBase);
  $("#weatherDescription").text(response.weather[0].description);
  $("#humidity").text(response.main.humidity);
  $(".fas").attr("src", iconUrl);
});

