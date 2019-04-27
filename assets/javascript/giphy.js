$(".dropdown-menu a").on("click", function () { 
 // var feeling = "happy"
 $(".gifDiv").empty()
 var feeling = $(this).text();
 var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + feeling + "&api_key=FHh9mWC90FyTtVYHXSy5uFhHubUvyLWb&limit=10";

 // We then created an AJAX call
 $.ajax({
     url: queryURL,
     method: "GET",
 }).then(function (response) {
     console.log(response);

     var results = response.data[8];
     var feelingGif = $("<img>").addClass("gif");
         feelingGif.attr("src", results.images.fixed_height.url);

     $(".gifDiv").append(feelingGif);

    //  Still missing code to randomly choose gif from results 
    
 });
});