//hide content until button is clicked
$("#spotify").slideUp(1);

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

  var topic = $(this).text();

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

// function makeChart() {
var testNumber = 20;


