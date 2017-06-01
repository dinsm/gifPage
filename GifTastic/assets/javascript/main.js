
    var topic=['lemon tart','strawberry tart','chocolate tart','kiwi tart','blueberry tart',];
        //['son goku','vegeta','freezer','son gohan','trunks','C 18','booboo','boo','bulma','piccolo','krilin','Chichi','son goten'];

    function renderButtons() {
        //topics.forEach(function(item){
        $("#tartView").empty();

        for (var i = 0; i < topic.length; i++){

            var a = $("<button>");
            a.addClass("tart");
            a.attr("data-name", topic[i]);
            a.text(topic[i]);
            $("#tartView").append(a);
        }
    }

    renderButtons();



    $("#addTart").on("click", function() {
        event.preventDefault();
        var tart = $("#tart-input").val().trim();
        console.log(tart);
        tart = tart.toLowerCase();
        if(topic.indexOf(tart) === 1) {
            topic.push(tart);
            console.log(topic);

            //$("#tartView").empty();
            //topic.createButton();
            //$("#tart-input").val("");

            renderButtons();

            return false;
        } else {
            return false;
        }
    });

    //
    //
    // function addButtonPage(){
    //     $("#addTart").on("click", function() {
    //         //event.preventDefault();
    //
    //         var newTart = $("#tart-input").val().trim();
    //         console.log(newTart);
    //
    //         topic.push(newTart);
    //         console.log(topic);
    //
    //         $("#tartView").empty();
    //         topic.createButton();
    //
    //
    //         $("#tart-input").val("");
    //
    //         return false;

            // tart = tart.toLowerCase();
            // if(topic.indexOf(tart) === 1) {
            //     topic.push(tart);
            //renderButtons();
            //     return false;
            // } else {
            //     return false;
            // }

    //     });
    // }
    //
    //function displayTartGifs(){

        $("button").on("click", ".tart", function(){

            $("#gifBank").empty();

                var tart = this.getAttribute('data-name').replace(" ", "+"); //$(this).data("name");
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tart + "&limit=10&api_key=dc6zaTOxFJmzC";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response){

                console.log(response);
                //console.log(queryURL);

                var results = response.data;

                //$("#gifBank").empty();

        for (var j = 0; j < results.length; j++) {

            var $tartDiv = $("<div>");
            // var $rating = results[j].rating;
            var $p = $("<p>").text("Rating: " + rating.results[j]);
            var $gifImage = $("<img class='gifImage'>");


            $gifImage.attr("src", results[j].images.fixed_height_still.url);
            $gifImage.attr("data-still", results[j].images.fixed_height_still.url);
            $gifImage.attr("data-animate", results[j].images.fixed_height.url);
            $gifImage.attr("data-state", "still");
            //$gifImage.addClass("tartImage");
            $tartDiv.append($p);
            $tartDiv.append($gifImage);
            $("#gifBank").prepend($tartDiv);


            //
            //
            //     var state = $(this).attr("data-state");

               }
            });
        });
    //}

  //  renderButtons();
//     // $(document).on("click", ".tart", displayTartGif);