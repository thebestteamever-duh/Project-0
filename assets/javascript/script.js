// --------------------------------- QUOTES API ---------------------------


//set API key and topic variables
    var APIKey = "c615aa6dedmsh39f89562dade0d8p122543jsnc8984b13db35"
   var topic = "Wisdom"

   //insert topic and API key into queryURL
   var queryURL = "https://quotable-quotes.p.rapidapi.com/randomQuotes"
    
   // We then created an AJAX call
    $.ajax({
    url: queryURL,
    method: "GET",
    headers: {"X-RapidAPI-Host": "quotable-quotes.p.rapidapi.com", "X-RapidAPI-Key": "6f84e5eceamsh5c5d979bf355c11p1f651ajsneb75d52cb90c"}
    }).then(function(response) {
    console.log(response)
        
    var quote = $("<p>").text(response.quote);
    var author = $("<h3>").text("– " + response.author)

    $(".quoteText").prepend(quote);
    $(".quoteAuthor").prepend(author);


        });
 
