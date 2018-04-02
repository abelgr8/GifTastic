var animals = ["Dog", "Cat", "Sloth"]

function displayGIFinfo() {
    var animalName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animalName + "&api_key=uTTH8XNnqRduN7Hw3Lc4z0J4Y7Q9hSQG&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;

        for (var j = 0; j < results.length; j++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[j].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[j].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);


        }
    });
}

function renderButtons() {

    $("#buttons").empty();

    // Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {

        // Generating buttons for each animal in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var x = $("<button>");
        // Adding a class
        x.addClass("bttn btn btn-primary");
        // Added a data-attribute
        x.attr("data-name", animals[i]);
        // Provided the initial button text
        x.text(animals[i]);
        // Added the button to the HTML
        $("#buttons").append(x);
    }
}

$("#entryadd").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#animal-inputs").val().trim();

    // Adding movie from the textbox to our array
    animals.push(animal);

    // Calling renderButtons which handles the processing the animal array
    renderButtons();

});

renderButtons();

$(document).on("click", ".bttn", displayGIFinfo);
// console.log(displayGIFinfo)

renderButtons();