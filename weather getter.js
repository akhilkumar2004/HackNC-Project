async function callAPI(useddropdown){
    const CITY_INPUT_ID = "search";
    const DROPDOWN_ID = "halloweencostumes";
    const TEMP_OUTPUT_ID = "tempOut";

    
    if (useddropdown){
        var cityName = document.getElementById(DROPDOWN_ID).value;
    } else {
        cityName = document.getElementById(CITY_INPUT_ID).value;
    }
    
    if (cityName == ""){
        cityName = "New York";
    }
    console.log(cityName);

    var response = await fetch("https://api.weatherbit.io/v2.0/current?units=I&city=" + cityName + "&key=d418ebdc744e4aeab55db0226a47c060");
    var inJson = await response.json();

    temperature = inJson.data[0].temp;
    if (temperature != null){
        document.getElementById(TEMP_OUTPUT_ID).innerText = cityName + ": " + inJson.data[0].temp + "°F";
    } else {
        document.getElementById(TEMP_OUTPUT_ID).innerText = "No temperature!";
    }
}