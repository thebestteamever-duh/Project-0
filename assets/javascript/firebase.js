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

  $(".dropdown-menu a").on("click", function () {
    event.preventDefault();

    var topic = $(this).text();

    //mood choice variables
    var happy = 0;
    var sad = 0;
    var angry = 0;
    var scared = 0;
    var tired = 0;
    var love = 0;

    //*******Moods******* */
    //    "Happy"
    //    "Sad"
    //    "Angry"
    //     "Scared"
    //     "Tired"
    //     "Love"

//Create an if Function to increment 
    if (topic === "Happy"){ 
        happy++
    } else if (topic === "Sad"){
        sad++
    } else if (topic === "Angry"){
        angry++
    } else if (topic === "Scared"){
        scared++
    } else if (topic === "Tired"){
        tired++
    } else {
        love++
    }
  
        





  });    
