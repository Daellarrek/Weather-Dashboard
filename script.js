$("#searchbtn").click(function () {

    let currentDate = moment().format('dddd, MMMM Do, YYYY');

    let APIKey = "8eddff1e9a5f42081d61f3f5b768aa88";

    let cityInput = $("#city-input").val();

    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;


    $.ajax({
        url: queryUrl,
        method: "GET"
    })

        .then(function (response) {

            console.log(queryUrl)
            console.log(response)

            $("#cityname").append(response.name).append(currentDate);
            $("<div></div>").appendTo("#cityinfo").text(response.main.temp - 273.15)* 1.80 + 32;
            $("<div></div>").appendTo("#cityinfo").text(response.main.humidity);
            $("<div></div>").appendTo("#cityinfo").text(response.wind.speed * 2.237);

            

            
            










        });

});



