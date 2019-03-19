// fetch_US_Census_API_model(08013,'sports')
// fetch_US_Census_API(37021,'sports')

console.log("Caca")
var settings = {
  "async": true,
  "origin":"https://sanjarito.github.io/Business-plan-api/",
  "crossDomain": true,
  "url": "https://coastwatch.pfeg.noaa.gov/erddap/convert/fipscounty.txt?county=NC%2C%20Buncombe",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
  console.log("ajax call done")
});
