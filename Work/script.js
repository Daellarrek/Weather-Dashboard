let APIKey = "8eddff1e9a5f42081d61f3f5b768aa88";

let cityInput = "";

let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;

let userInput = cityInput

$.ajax({
    url: queryUrl,
    method: "GET"
})

    .then(function (response) {

        console.log(queryUrl)
        console.log(response)

    });
