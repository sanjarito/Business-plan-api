function sports_Calculator(demographic_data){
  console.log('inside sports calculator function')
  median_age_function(demographic_data)

  }


function construction_Calculator(demographic_data){
  console.log('inside construction calculator function')
  console.log(demographic_data[0]['Median Age'])

}
function restaurant_Calculator(demographic_data){
  console.log('inside restaurant calculator function')
  console.log(demographic_data)
}
function beauty_Calculator(demographic_data){
  console.log('inside beauty calculator function')
  console.log(demographic_data)
}
function automotive_Calculator(demographic_data){
  console.log('inside automotive calculator function')
  console.log(demographic_data)
}

function median_age_function(demographic_data){
  // console.log(demographic_data[0]['Median Age'])
  // console.log(demographic_data[1]['Median Age'])
  let age_diff = (demographic_data[0]['Median Age']) - (demographic_data[1]['Median Age'])
  console.log(age_diff)



}
