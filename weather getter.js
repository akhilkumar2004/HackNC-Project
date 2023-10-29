async function callAPI(){
    const CITY_INPUT_ID = "search";
    const DROPDOWN_ID = "halloweencostumes";
    const TEMP_OUTPUT_ID = "testOut";

    var cityName = document.getElementById(DROPDOWN_ID).value;
    if (cityName == ""){
        cityName = document.getElementById(TEMP_OUTPUT_ID).value;
    }

    var response = await fetch("https://api.weatherbit.io/v2.0/current?units=I&city=" + cityName + "&key=d418ebdc744e4aeab55db0226a47c060");
    var inJson = await response.json();

    temperature = inJson.data[0].temp;
    console.log(temperature);
    if (temperature != null){
        document.getElementById(TEMP_OUTPUT_ID).innerText = "" + inJson.data[0].temp;
    } else {
        document.getElementById(TEMP_OUTPUT_ID).innerText = "No temperature!";
    }
}