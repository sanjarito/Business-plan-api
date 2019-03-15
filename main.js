function change_Countyname_to_CountyFIP(county_name,state_key){
  let county_name_corrected = upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(county_name));
  let county_url = `https://coastwatch.pfeg.noaa.gov/erddap/convert/fipscounty.txt?county=${state_key}%2C%20${county_name_corrected}`
  fetch(county_url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          console.log('Make sure your County exists within selected state')
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          // let county_FIP = data;

          fetch_US_Census_API(data)
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}



function fetch_US_Census_API(fip_fullcode){
  // console.log(fip_fullcode)
  let string_FIP_Code = fip_fullcode.toString();
  const base_url = 'https://api.census.gov/data/2017/acs/acs1/subject?'
  const query = `get=S0101_C01_032E,S0101_C01_001E`
  let state_Fip = string_FIP_Code.slice(0,2)
  let county_Fip = string_FIP_Code.slice(2,5)
  console.log(state_Fip)
  console.log(county_Fip)
  let county_Choice = `&for=county:${county_Fip}&in=state:${state_Fip}`
  const api_Key = "&key=55b0d26c356f26e6e290449d42e7b084e78877e3"
  let full_URL = base_url + query + county_Choice + api_Key
  fetch(full_URL)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data[1]);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}


function listenForm(){
  $('#form-submit').on('click',function(){
    event.preventDefault();
    const county_name = $('#county').val()
    const state_selection = $('#state_selection')
    let state_key = (state_selection[0].value)
    change_Countyname_to_CountyFIP(county_name,state_key)
  })


}

function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseAllWordsExceptFirstLetters(string) {
    return string.replace(/\w\S*/g, function (word) {
        return word.charAt(0) + word.slice(1).toLowerCase();
    });
}

function startMachine(){
  listenForm()
}

startMachine()
