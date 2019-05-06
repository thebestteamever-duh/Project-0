// // 2. This code loads the IFrame Player API code asynchronously.
// // var tag = document.createElement('script');
// // tag.id = 'iframe-demo';
// // tag.src = "https://www.youtube.com/iframe_api";
// // var firstScriptTag = document.getElementsByTagName('script')[0];
// // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// authenticate().then(loadClient);
// loadClient();

// function authenticate() {
//   return gapi.auth2.getAuthInstance()
//     .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
//     .then(function () { console.log("Sign-in successful"); },
//       function (err) { console.error("Error signing in", err); });
// }
// function loadClient() {
//   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//     .then(function () { console.log("GAPI client loaded for API"); },
//       function (err) { console.error("Error loading GAPI client for API", err); });
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//   return gapi.client.youtube.search.list({
//     "part": "snippet",
//     "maxResults": 2,
//     "q": "happy",
//     "topicId": "yoga"
//   })
//     .then(function (response) {
//       // Handle the results here (response.result has the parsed body).
//       console.log("Response", response);
//     },
//       function (err) { console.error("Execute error", err); });
// }
// gapi.load();


// {/* <button onclick="authenticate().then(loadClient)">authorize and load</button>
// <button onclick="execute()">execute</button> */}

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   $(".dropdown-menu a").on("click", function () {
//     var feeling = $(this).text();
//     console.log(feeling);
//     // })};

//     // var happy = ["j8KXHMX32gU", "oa6cHEJIjYI"]
//     // var sad = ["QTc0gPyfpCg", "dS7W2OhzMiE"]
//     // var angry = ["bgg5qvA9HtY", "YiE9DUkCtJU"]
//     // var scared = ["nmcuoaqdJ9w", "lmFp6YIlVhw"]
//     // var tired = ["K5IU4bPS_S8", "lzObhHet9QM"]
//     // var love = ["rbNo2PRiExw", "mxbow_aKoAM"]


//     if (feeling == "Happy") {
//       // videos = ["j8KXHMX32gU", "oa6cHEJIjYI"]
//       // var random = Math.floor(Math.random() * 5);
//       // for (var i = 0; i < videos.length; i++) {
//       //   var videoId = videos[random];
//       // }
//       // player = new YT.Player('player', {
//       //   height: '390',
//       //   width: '640', 
//       //   videoId: videoId,
//       //   events: {
//       //     'onReady': onPlayerReady,
//       //     'onStateChange': onPlayerStateChange
//       //   }});

//       console.log("This is happy");
//     }
//     else if (feeling == "Sad") {
//       console.log("This is sad");
//     }
//     else if (feeling == "Angry") {
//       console.log("This is angry");
//     }
//     else if (feeling == "Scared") {
//       console.log("This is scared");
//     }
//     else if (feeling == "Tired") {
//       console.log("This is angry");
//     }
//     else {
//       console.log("Ugh");
//     };
//   })
// };

// //     else if (feeling = "sad") {
// //   var videos = ["QTc0gPyfpCg", "dS7W2OhzMiE"];
// //   var random = Math.floor(Math.random() * 5);
// //   for (var i = 0; i < videos.length; i++) {
// //     var videoId = videos[random];
// //   }
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: videoId,
// //     events: {
// //       'onReady': onPlayerReady,
// //       'onStateChange': onPlayerStateChange
// //     }
// //   });
// // }
// // else if (feeling = "angry") {
// //   var videos = ["bgg5qvA9HtY", "YiE9DUkCtJU"];
// //   var random = Math.floor(Math.random() * 5);
// //   for (var i = 0; i < videos.length; i++) {
// //     var videoId = videos[random];
// //   }
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: videoId,
// //     events: {
// //       'onReady': onPlayerReady,
// //       'onStateChange': onPlayerStateChange
// //     }
// //   });
// // }
// // else if (feeling = "scared") {
// //   var videos = ["nmcuoaqdJ9w", "lmFp6YIlVhw"];
// //   var random = Math.floor(Math.random() * 5);
// //   for (var i = 0; i < videos.length; i++) {
// //     var videoId = videos[random];
// //   }
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: videoId,
// //     events: {
// //       'onReady': onPlayerReady,
// //       'onStateChange': onPlayerStateChange
// //     }
// //   });
// // }
// // else if (feeling = "tired") {
// //   var videos = ["K5IU4bPS_S8", "lzObhHet9QM"];
// //   var random = Math.floor(Math.random() * 5);
// //   for (var i = 0; i < videos.length; i++) {
// //     var videoId = videos[random];
// //   }
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: videoId,
// //     events: {
// //       'onReady': onPlayerReady,
// //       'onStateChange': onPlayerStateChange
// //     }
// //   });
// // }
// // else (feeling = "love") {
// //   var videos = ["rbNo2PRiExw", "mxbow_aKoAM"];
// //   var random = Math.floor(Math.random() * 5);
// //   for (var i = 0; i < videos.length; i++) {
// //     var videoId = videos[random];
// //   }
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: videoId,
// //     events: {
// //       'onReady': onPlayerReady,
// //       'onStateChange': onPlayerStateChange
// //     }
// //   });
// // };
// // })};






// //   var random = Math.floor(Math.random() * 5);
// //   for (var i = 0; i < videos.length; i++) {
// //     var videoId = videos[random];
// //   }
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: videoId,
// //     events: {
// //       'onReady': onPlayerReady,
// //       'onStateChange': onPlayerStateChange
// //     }
// //   });
// // }


// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   document.getElementById('player').style.borderColor = '#FF6D00';
// }
// function changeBorderColor(playerStatus) {
//   var color;
//   if (playerStatus == -1) {
//     color = "#37474F"; // unstarted = gray
//   } else if (playerStatus == 0) {
//     color = "#FFFF00"; // ended = yellow
//   } else if (playerStatus == 1) {
//     color = "#33691E"; // playing = green
//   } else if (playerStatus == 2) {
//     color = "#DD2C00"; // paused = red
//   } else if (playerStatus == 3) {
//     color = "#AA00FF"; // buffering = purple
//   } else if (playerStatus == 5) {
//     color = "#FF6DOO"; // video cued = orange
//   }
//   if (color) {
//     document.getElementById('player').style.borderColor = color;
//   }
// };
// function onPlayerStateChange(event) {
//   changeBorderColor(event.data);
// };
