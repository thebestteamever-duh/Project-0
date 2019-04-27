
var APIKey = "c8bcf8bb7a6d8ef744d855a989993230";


// Here we are building the URL we need to query the database
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=chicago,illinois&units=imperial&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {


  // Variables for Weather Information
  var wDesc = response.weather[0].description;

  var icon = response.weather[0].icon
  var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png"

  var tempBase = Math.round(response.main.temp);

  var sunset = response.sys.sunset
  var time = moment.unix(sunset).format("HH: mm");  

  // Code to insert weather information onto HTML page
  // $("#sunset").text(time);
  // $("#temp").text(tempBase + "℉");
  // $("#humidity").text(response.main.humidity);
  // $(".fas").attr("src", iconUrl);


  // For 2 weather descriptions
  // if (response.weather.length > 1) {
  //   var wDesc2 = response.weather[1].description;
  //   $("#weatherDescription").append(wDesc + " & " + wDesc2);
  // }
  // else {
  //   $("#weatherDescription").append(wDesc);
  // }

  // console.log(response);
});

