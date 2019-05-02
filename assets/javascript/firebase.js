//hide content until button is clicked
$("#spotify").slideUp(1);

// $("a").click(function(){
//   $("#spotify").slideDown();
// });

//base function for changing css - then call this function below in the if, if else to trigger based on choice
// changeCss("#01BEFE", "#FFDD00", "#FF7D00", "#FF006D", "#ADFF02", "#8F00FF")
// function changeCss(yellow, pink, quote, gif, mindset, youtube) {
//   $("#divSpotify").css({
//     "background": "linear-gradient("yellow "," pink")",
//    });
//   //  #f9b749
//   // #f47467
//    $("#divWeather").css({
//     "background": "",
//     "background": weather,
//    });
//    $("#divQuote").css({
//     "background": "",
//     "background-color": quote,
//    });
//    $("#divGif").css({
//     "background": "",
//     "background-color": gif,
//    });
//    $("#divMindset").css({
//     "background": "",
//     "background-color": mindset,
//    });
//    $("#divYoutube").css({
//     "background": "",
//     "background-color": youtube,
//    });


//  Happy("#01BEFE", "#FFDD00", "#FF7D00", "#FF006D", "#ADFF02", "#8F00FF")
// Sad "#1d1e1f", "#282b2e", "#35393d", "#3e4954",	"#455566", "#5f6d9f"
// Angry "#fa8989", "#f64d52", "#a91834", "#840029", "#fddac3", "#832a2a"
// Scared "#add2df", "#bdd2df", "#cdd2df", "#ddd2df", "#edd2df", #f6b5d4
// }
// Capri (#01BEFE), 
// Golden Yellow (#FFDD00)
// Amber (#FF7D00), 
// Vivid Raspberry (#FF006D)
// Spring Bud (#ADFF02)
// Electric Violet (#8F00FF).
// Initialize Firebase
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

$(".dropdown-menu a").on("click", function () {

  $("#spotify").slideDown();

  // event.preventDefault();

  var topic = $(this).text();
  // console.log(this);
  // console.log("clicked");

  //Create an if Function to increment the chosen topic
  // if (topic === "dumb") {
  //   // happy++;
  //   // console.log("happy", happy);
  //   // // changeCss("#01BEFE", "#FFDD00", "#FF7D00", "#FF006D", "#ADFF02", "#8F00FF")
  //   // // $(".contentDiv").css("background-image", "linear-gradient(#f9b749, #f47467)");

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
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
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

// function makeChart() {
var testNumber = 20;


// }
// console.log(chart.data.datasets.data);
