
const demographic_data = []
function change_Countyname_to_CountyFIP(county_name,state_key,county_name_compare,state_key_compare,industry_key){
  let county_name_corrected = upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(county_name));
  let county_name_compare_corrected = upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(county_name_compare));
  // let county_url = `https://coastwatch.pfeg.noaa.gov/erddap/convert/fipscounty.txt?county=${state_key}%2C%20${county_name_corrected}`
  let county_url = `https://coastwatch.pfeg.noaa.gov/erddap/convert/fipscounty.txt?county=NC%2C%20Buncombe`
  let county_url_compare = `https://coastwatch.pfeg.noaa.gov/erddap/convert/fipscounty.txt?county=${state_key_compare}%2C%20${county_name_compare_corrected}`
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  fetch(`${proxyurl+county_url}`,{
  mode: 'cors',
  // headers: {
  //   'Origin': 'https://github.com/sanjarito/Business-plan-api',
  //   'Access-Control-Request-Method': GET,
  //   'Access-Control-Request-Headers': 'content-type,accept'
   })

    .then(
      function(response) {
        console.log('inside url 1st step')
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          console.log('Make sure your County exists within selected state')
          return;
        }
        response.text()
        .then(function(data){
        fetch_US_Census_API(data,industry_key)
        })
      })

    .then(function(data){
      console.log('inside url compare')
      fetch(`${county_url_compare}`)
        .then(function(response){
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            console.log('Make sure your County exists within selected state')
            return;
          }
          response.text()
          .then(function(data){
          fetch_US_Census_API_model(data,industry_key)
          })


        })
      }
    )

}



function fetch_US_Census_API(fip_fullcode,industry_key){
  let string_FIP_Code = fip_fullcode.toString();
  const base_url = 'https://api.census.gov/data/2017/acs/acs1/subject?'
  const query = `get=S0101_C01_032E,S0101_C01_001E,S0101_C02_020E,S0101_C02_024E,S0101_C03_001E,S0804_C01_037E,S0804_C01_044E,S0804_C01_086E,S0804_C01_090E,S1401_C02_010E,S1101_C01_002E,S1501_C02_015E,S1501_C02_014E,S1701_C03_001E,S1901_C01_013E,S2001_C01_002E,S1902_C03_001E,S2301_C04_001E`


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
          let demographic_Variables = (data[1]);
          business_Score_Calculator(demographic_Variables,industry_key,demographic_data)
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function fetch_US_Census_API_model(fip_fullcode,industry_key){
  let string_FIP_Code = fip_fullcode.toString();
  const base_url = 'https://api.census.gov/data/2017/acs/acs1/subject?'
  const query = `get=S0101_C01_032E,S0101_C01_001E,S0101_C02_020E,S0101_C02_024E,S0101_C03_001E,S0804_C01_037E,S0804_C01_044E,S0804_C01_086E,S0804_C01_090E,S1401_C02_010E,S1101_C01_002E,S1501_C02_015E,S1501_C02_014E,S1701_C03_001E,S1901_C01_013E,S2001_C01_002E,S1902_C03_001E,S2301_C04_001E`
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
          let demographic_Variables = (data[1]);
          county_comparison_model(demographic_Variables,industry_key,demographic_data)
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function business_Score_Calculator(demographic_Variables,industry_key,demographic_data,){
  const values = demographic_Variables
  const keys = ['Median Age', 'Total Population','Percent Population 5 to 14 years',
  'Percent Population 15 to 44 years', 'Total Male Population','Estimate Earnings','% of Population that work in services',
  'Mean Travel Time to Work','% that has no vehicle','% Enrolled in College',
  'Average Household Size','Bachelors Degree or Higher','High School Degree or Higher',
  'Population % for whom poverty status is determined','Households!!Estimate!!Mean income',
  'Total!!Estimate!!Median earnings','Mean income','Unemployment Rate','State FIP code','County FIP code']

  var result = {};
  keys.forEach((key, i) => result[key] = values[i]);
  demographic_data.push(result)
  return result
}

function county_comparison_model(demographic_Variables,industry_key,demographic_data){
  const values = demographic_Variables
  const keys = ['Median Age', 'Total Population','Percent Population 5 to 14 years',
  'Percent Population 15 to 44 years', 'Total Male Population','Estimate Earnings','% of Population that work in services',
  'Mean Travel Time to Work','% that has no vehicle','% Enrolled in College',
  'Average Household Size','Bachelors Degree or Higher','High School Degree or Higher',
  'Population % for whom poverty status is determined','Households!!Estimate!!Mean income',
  'Total!!Estimate!!Median earnings','Mean income','Unemployment Rate','State FIP code','County FIP code']

  var result_model = {};
  keys.forEach((key, i) => result_model[key] = values[i]);
  console.log(industry_key)
  demographic_data.push(result_model)
  // industry_selector(demographic_data,industry_key)
  if (industry_key == "sports") {
    sports_Calculator(demographic_data,function(){
      console.log(total_score)
    })

  } else if (industry_key == "construction") {
    construction_Calculator(demographic_data)
  } else if (industry_key == "restaurant") {
    restaurant_Calculator(demographic_data)
  } else if (industry_key == "beauty") {
    beauty_Calculator(demographic_data)
  } else if (industry_key == "automotive") {
    automotive_Calculator(demographic_data)
  } else {
    console.log('no industry was selected')
  }

}

function listenForm(){

  $('#form-submit').on('click',function(e){
    e.preventDefault();
    // EMPTY ARRAY
    empty();
    // GET VALUE FROM COUNTY NAME FIELD IN FORM
    const county_name = $('#county').val()
    const county_name_compare = $('#county-compare').val()
    // GET VALUE FROM STATE DROP DOWN FIELD IN FORM
    const state_selection = $('#state_selection')
    const state_selection_compare = $('#state_selection-compare')
    let state_key = (state_selection[0].value)
    let state_key_compare = (state_selection_compare[0].value)
    // GET VALUE FROM INDUSTRY DROP DOWN FIELD IN FORM
    const industry_selection = $('#industry_selection')
    let industry_key = (industry_selection[0].value)
    change_Countyname_to_CountyFIP(county_name,state_key,county_name_compare,state_key_compare,industry_key)
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

function empty(){
  demographic_data.length=0;
  total_score.length=0;
}

function startMachine(){
  listenForm()
}

startMachine()
