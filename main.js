


function fetch_US_Census_API(county_name){
  console.log(county_name)
  const base_url = 'https://api.census.gov/data/2017/acs/acs1/subject?'
  const query = `get=S0101_C01_032E,S0101_C01_001E`
  let state_Fip = '37';
  let county_Choice = `&for=county:${county_name}&in=state:${state_Fip}`
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
    fetch_US_Census_API(county_name)
  })


}

function startMachine(){
  listenForm()
}

startMachine()
