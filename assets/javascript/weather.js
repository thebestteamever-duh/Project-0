//  Ajax variables
var APIKey = "c8bcf8bb7a6d8ef744d855a989993230";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=hoffman+estates,illinois&units=imperial&appid=" + APIKey;



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

  // Variables for Weather Information
  let wDesc = response.weather[0].description; //Description

  var icon = response.weather[0].icon //Weather icon
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png"

  var tempBase = Math.round(response.main.temp); //Temperature

  var sunset = response.sys.sunset //Sunset time
  var time = moment.unix(sunset).format("HH: mm");


  // Place weather into Div
  $("#sunset").text(time);
  $("#temp").text(tempBase);
  $("#weatherDescription").text(wDesc);
  $("#humidity").text(response.main.humidity);
  $(".fas").attr("src", iconUrl);
});

