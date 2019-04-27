$(".dropdown-menu a").on("click", function () {
    // var feeling = "happy"
    $(".gif").empty()
    var feeling = $(this).text();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + feeling + "&api_key=FHh9mWC90FyTtVYHXSy5uFhHubUvyLWb&limit=20";

    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var random = Math.floor(Math.random() * 21);
        // console.log(response);

        var results = response.data[random];
        var feelingGif = $("<img>").addClass("gif");
        feelingGif.attr("src", results.images.fixed_height.url);

        $(".gif").append(feelingGif);
    });
});