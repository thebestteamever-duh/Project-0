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
    // event.preventDefault();

    var topic = $(this).text();
    console.log(this)
    console.log("clicked")

 
   

//Create an if Function to increment the chosen topic
    if (topic === "Happy"){ 
        happy++
        console.log("happy", happy)
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
//pass the updated clicks to firebase
  database.ref().set({
    fHappy: happy,
      fSad: sad,
      fAngry: angry,
      fScared: scared,
      fTired: tired,
      fLove: love,
  });

});


//Pull database information out of Firebase 
database.ref().on("value", function(snapshot) {
    //**** */These variables will produce the number of clicks of each mood.****
    var dbHappy = snapshot.val().fHappy;
    var dbSad = snapshot.val().fSad;
    var dbAngry = snapshot.val().fAngry;
    var dbScared = snapshot.val().fScared;
    var dbTired = snapshot.val().fTired;
    var dbLove = snapshot.val().fLove;

    console.log("fbHappy", dbHappy)
// Create Error Handling
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});




 
