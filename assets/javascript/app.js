$("#spotify").slideUp(1);
/* ----------------------------------------- Base Variabes ---------------------------------- */
var topic = "";
var config = {
    apiKey: "AIzaSyA9II18kgiRBsKko3xJVcsQ5ai9PsNJtMY",
    authDomain: "mindset-c4818.firebaseapp.com",
    databaseURL: "https://mindset-c4818.firebaseio.com",
    projectId: "mindset-c4818",
    storageBucket: "mindset-c4818.appspot.com",
    messagingSenderId: "4140115652"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  //variables used to for moods
  var happy = 0;
  var sad = 0;
  var angry = 0;
  var scared = 0;
  var tired = 0;
  var love = 0;
  
  /* ----------------------------------------- all calls controlled by single jQuery ---------------------------------- */
  $(".dropdown-menu a").on("click", function () {
    $(".gif").empty()
    $("#spotify").slideDown();
    
    // event.preventDefault();
  
    topic = $(this).text();
/* ----------------------------------------- LOADER FUNCTION CONTAINS ALL FUNCTIONS---------------------------------- */
   loader()
  
    if (topic === "Sad") {
      sad++;
      $(".contentDiv").css("background-image", "linear-gradient(#4c4c4c, #345467)");
  
    } else if (topic === "Happy") {
      happy++;
      $(".contentDiv").css("background-image", "linear-gradient(#FFDD00, #01BEFE)");
    } else if (topic === "Angry") {
      console.log("Angry");
      angry++;
      $(".contentDiv").css("background-image", "linear-gradient(#f03e3e, #471c1c)");
    } else if (topic === "Scared") {
      scared++;
      $(".contentDiv").css("background-image", "linear-gradient(#3f1a49, #36492e)");
    } else if (topic === "Tired") {
      tired++;
      $(".contentDiv").css("background-image", "linear-gradient(#4a4e69, #c9ada7)");
  
    } else {
      love++;
      $(".contentDiv").css("background-image", "linear-gradient(#ff4770, #ffbbca)");
    }
    //pass the updated clicks to firebase
    database.ref().set({
      fHappy: happy,
      fSad: sad,
      fAngry: angry,
      fScared: scared,
      fTired: tired,
      fLove: love
    });
  });
  
  //Draw Chart
  Chart.defaults.global.defaultFontFamily = "Roboto";
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",
  
    // The data for our dataset
    data: {
      labels: ["Happy", "Sad", "Angry", "Scared", "Tired", "Love"],
      datasets: [
        {
          label: "The World's Mindset",
          backgroundColor: [
            "#facd50",
            "#71cce1",
            "#f4786c",
            "#7edf5d",
            "#8a73f0",
            "#fb6262"
          ],
          borderColor: "rgb(255, 99, 132)",
          data: [0, 0, 0, 0, 0, 0]
        }
      ]
    },
  
    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
  
      legend: {
        labels: {
             fontColor: 'white'
            }
         },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: 'white'
            }
          }
        ],
        xAxes: [{
          ticks: {
              fontColor: 'white'
          },
      }]
      }
    }
  });
  
  //Pull database information out of Firebase
  database.ref().on(
    "value",
    function (snapshot) {
      // console.log("EMOTIONS", snapshot.val());
      //**** */These variables will produce the number of clicks of each mood.****
      happy = snapshot.val().fHappy;
      sad = snapshot.val().fSad;
      angry = snapshot.val().fAngry;
      scared = snapshot.val().fScared;
      tired = snapshot.val().fTired;
      love = snapshot.val().fLove;
  
  
      //update chart
      chart.data.datasets[0].data = [happy, sad, angry, scared, tired, love];
      chart.update();
  
      // Create Error Handling
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
  );
function loader () {
spotify()
gif()
quotes()
youTube()

}
/* ----------------------------------------- GIF Function ---------------------------------- */
function gif() {
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=FHh9mWC90FyTtVYHXSy5uFhHubUvyLWb&limit=20";

    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var random = Math.floor(Math.random() * 21);

        var results = response.data[random];
        var topicGif = $("<img>").addClass("gif");
        topicGif.attr("src", results.images.fixed_height.url);

        $(".gif").append(topicGif);
    });


/* ----------------------------------------- QOUTES Function ---------------------------------- */
}
function quotes (){
//set API key and topic variables
var APIKey = "c615aa6dedmsh39f89562dade0d8p122543jsnc8984b13db35"
var quote = "Wisdom"

//insert topic and API key into queryURL
var queryURL = "https://quotable-quotes.p.rapidapi.com/randomQuotes"

// We then created an AJAX call
$.ajax({
url: queryURL,
method: "GET",
headers: {"X-RapidAPI-Host": "quotable-quotes.p.rapidapi.com", "X-RapidAPI-Key": "6f84e5eceamsh5c5d979bf355c11p1f651ajsneb75d52cb90c"}
}).then(function(response) {
    
var quote = $("<h1>").text(response.quote);
var author = $("<h3>").text("– " + response.author)

$(".quoteText").prepend(quote);
$(".quoteAuthor").prepend(author);


    });
}

// --------------------------------- Spotify Function ---------------------------

function spotify () {
//ID and Secret from the spotify API Account
var ClientID = "facc86141dcf4025afaa50dfe18f85b1";
var ClientSecret = "a2f1c888f95141c59b760399df45b2c2";


//bearer to capture the bearer token received on authentication API call (POST)
var bearer = "";

//token type required to authorized on the 2nd API call (GET)
var tokenType = "";

// Spotify API URL for for authentication with cors anywhere to address CORS errors on authentication
var authURL = "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token"

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
console.log(auth)

//API GET to query for playlists to match the topic(mood)
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"Accept": "application/json", "Content-Type": "application/json", "Authorization": auth}
        }).then(function(response) {
        console.log(response) 
        
        //Randomly choose a playlist from the API response
        i = Math.floor(Math.random()*(response.playlists.items.length))

        //Get response and build url to pass into spotify embed player
        var id = response.playlists.items[i].id
        var urlBuilder = "https://open.spotify.com/embed/playlist/"
        var link = urlBuilder + id;
        console.log(link)

        //jquery to update iframe src and load embedded player into DOM
        $("#player").attr("src", link)
        
    });
 
});
}
 

// --------------------------------- Youtube Function ---------------------------
function youTube (){

    gapi.client.setApiKey("AIzaSyCX8RJZ9iqGiukvsMVUFODyEFmx5W4bM2I");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function (){
            execute()
        });

// Make sure the client is loaded before calling this method.
function execute() {
    return gapi.client.youtube.search.list({
        "part": "snippet",
        "maxResults": 10,
        "q": "yoga"+ topic,
        "topicId": "yoga",
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
            console.log("videoId " + response.result.items[0].id.videoId);
            var urlBuild = "https://www.youtube.com/embed/"
            i = Math.floor(Math.random()*(response.result.items.length))
            // var tag = document.createElement('script');
            var urlBuild = "https://www.youtube.com/embed/"
            var videoId = response.result.items[i].id.videoId;
            var ytUrl = urlBuild + videoId;
            var yt = $(".player").attr("src", ytUrl);
            console.log("yt", yt)
        }); }
   
}
gapi.load("client");