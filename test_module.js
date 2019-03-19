// fetch_US_Census_API_model(08013,'sports')
// fetch_US_Census_API(37021,'sports')


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://coastwatch.pfeg.noaa.gov/erddap/convert/fipscounty.txt?county=NC%2C%20Buncombe",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "9be8b17a-36de-409a-a78b-4a6edc190ea6"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
