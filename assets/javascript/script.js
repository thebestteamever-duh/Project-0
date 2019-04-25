// --------------------------------- QUOTES API ---------------------------
function getQuote() {

//set API key and topic variables
var APIKey = "c615aa6dedmsh39f89562dade0d8p122543jsnc8984b13db35"
   var topic = "Wisdom"

   //insert topic and API key into queryURL
  var queryURL = "https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=" + topic + "&maxR=1&size=medium&key=" + APIKey;
    
        // We then created an AJAX call
        $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"X-RapidAPI-Host": "healthruwords.p.rapidapi.com", "X-RapidAPI-Key": "c615aa6dedmsh39f89562dade0d8p122543jsnc8984b13db35"}
        }).then(function(response) {
        console.log(response)
        
        }) .then(function(response) {
            

        });
    }
