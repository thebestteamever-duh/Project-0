var topic = "";

$(".dropdown-menu a").on("click", function () {
    topic = $(this).text();
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
   


 
});
gapi.load("client");