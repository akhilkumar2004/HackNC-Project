getInfo();

async function getInfo(){
    var response = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=1", {headers: {
            "Authorization": "q0yzqQvVpqjDupi4BQnet58qlhVyOcksy2SVxQJyHwoVtxWSgOUTD7oP"
        }
    });
    var inJson = await response.json();
    console.log(inJson.errors[0]);
}