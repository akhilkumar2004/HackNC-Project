getInfo();

async function getInfo(){
    var response = await fetch("https://na.business-api.amazon.com/products/2020-08-26/products?productRegion=US&locale=en", {headers: {
            "x-amz-user-email": ""
        }
    });
    var inJson = await response.json();
    console.log(inJson.errors[0]);
}