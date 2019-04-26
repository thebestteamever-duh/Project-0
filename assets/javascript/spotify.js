//ID and Secret from the spotify API Account
var ClientID = "facc86141dcf4025afaa50dfe18f85b1";
var ClientSecret = "a2f1c888f95141c59b760399df45b2c2";


//bearer to capture the bearer token received on authentication API call (POST)
var bearer = ""

//token type required to authorized on the 2nd API call (GET)
var tokenType = ""

// Spotify API URL for for authentication with cors anywhere to address CORS errors on authentication
var authURL = "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token"


//jQuery function to capture mood choosen
//This function also is what kicks off the API POST and GET to 
//Authenticate, Search, and Then update DOM with the Spotify player
$(".dropdown-menu a").on("click", function () {

    //event prevent default will keep the page from reloading and losing the information already stored from the db
    // event.preventDefault();

    //jquery to capture the specified dropdown chosen, topic is the variable which is used to pass the user chosen mood to the API search
    var topic = $(this).text();
    // console.log("topic", topic)

    //Spotify API URL to query for Playist
    var queryURL = "https://api.spotify.com/v1/search?q=" + topic + "&type=playlist"  

    //API POST to authorize using the Client Credentials Auth Flow
    $.ajax({
    url: authURL,
    method: "POST",
    headers: {
    "Authorization": "Basic ZmFjYzg2MTQxZGNmNDAyNWFmYWE1MGRmZTE4Zjg1YjE6YTJmMWM4ODhmOTUxNDFjNTliNzYwMzk5ZGY0NWIyYzI="},
    data: {
    "grant_type": "client_credentials"},    
    }).then(function(response) {
    // console.log(response)

    //bearer and token type are required in order for the next API Call (which queries and recieves playlists)
    bearer = response.access_token
    tokenType = response.token_type;

    //Concatenate the token type and bearer auth to submit complete API GET to search for matching playlists
    var auth = tokenType + " " + bearer;
    // console.log(auth)

    //API GET to query for playlists to match the topic(mood)
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"Accept": "application/json", "Content-Type": "application/json", "Authorization": auth}
        }).then(function(response) {
        // console.log(response)

        //this is working for MVP, but what needs to be done is to create a math.random function so we can do
        //response.playlists.items[i] to grab a random playlist from the search results
        
        //********Randomizer Code Goes Here*********


        //********Randomizer Code Goes Here*********

        var id = response.playlists.items[8].id
        var urlBuilder = "https://open.spotify.com/embed/playlist/"
        var link = urlBuilder + id;
        // console.log(link)

        //jquery to update iframe src and load embedded player into DOM
        $("#player").attr("src", link)
        
    });
  
});
});