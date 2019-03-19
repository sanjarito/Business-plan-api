let total_score = []

function sports_Calculator(demographic_data,callback){

  console.log('inside sports calculator function')
  median_age_scorer(demographic_data)
  total_population_scorer(demographic_data)
  five_to_fourteen_scorer(demographic_data)
  fifteen_to_fortyfour_scorer(demographic_data)

  callback();

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

function median_age_scorer(demographic_data){
  let age_diff = (demographic_data[0]['Median Age']) - (demographic_data[1]['Median Age'])
  let age_diff_abs = Math.abs(age_diff)
  if (age_diff_abs <= 1){
     total_score.push({'Median Age Score':10})
  } else if (age_diff_abs > 1 && age_diff_abs < 5){
     total_score.push({'Median Age Score':9})
  } else if (age_diff_abs >= 5 && age_diff_abs < 10){
     total_score.push({'Median Age Score':8})
  } else if (age_diff_abs >= 10 && age_diff_abs < 20){
     total_score.push({'Median Age Score':7})
  } else if (age_diff_abs >= 20){
     total_score.push({'Median Age Score':6})
  } else {
     total_score.push({'Median Age Score':5})
  }

}

function total_population_scorer(demographic_data){

  let population_target = demographic_data[0]['Total Population']
  let population_model = demographic_data[1]['Total Population']
  let population_diff = population_target - population_model
  if (Math.sign(population_diff)== +1 || Math.sign(population_diff)== 0){
    total_score.push({'Total Population Score':10})
  } else if (Math.sign(population_diff)== -1 && Math.abs(population_diff)<20000){
    total_score.push({'Total Population Score':9})
  } else if (Math.sign(population_diff)== -1 && (Math.abs(population_diff)>=20000) && (Math.abs(population_diff)<80000)){
    total_score.push({'Total Population Score':8})
  } else if (Math.sign(population_diff)== -1 && (Math.abs(population_diff)>=80000) && (Math.abs(population_diff)<120000)){
    total_score.push({'Total Population Score':7})
  } else if (Math.sign(population_diff)== -1 && (Math.abs(population_diff)>=120000) && (Math.abs(population_diff)<200000)){
    total_score.push({'Total Population Score':6})
  } else {
    total_score.push({'Total Population Score':5})
  }



}

function five_to_fourteen_scorer(demographic_data){
  let population_target = demographic_data[0]['Percent Population 5 to 14 years']
  let population_model = demographic_data[1]['Percent Population 5 to 14 years']
  let population_minus = population_model - population_target

  if (population_minus<= 1){
    total_score.push({'Total Age-Five-Fourteen Score':10})
  } else if (population_minus > 1 && population_minus <= 2 ){
    total_score.push({'Total Age-Five-Fourteen Score':9})
  } else if (population_minus > 2 && population_minus <= 4 ){
    total_score.push({'Total Age-Five-Fourteen Score':8})
  } else if (population_minus > 4 && population_minus <= 7 ){
    total_score.push({'Total Age-Five-Fourteen Score':7})
  } else if (population_minus > 7 && population_minus <= 10 ){
    total_score.push({'Total Age-Five-Fourteen Score':6})
  } else {
    total_score.push({'Total Age-Five-Fourteen Score':5})
  }
}

function fifteen_to_fortyfour_scorer(demographic_data){
  let population_target = demographic_data[0]['Percent Population 15 to 44 years']
  let population_model = demographic_data[1]['Percent Population 15 to 44 years']
  let population_minus = population_model - population_target

  console.log(population_target)
  console.log(population_model)

  if (population_minus<= 1){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':10})
  } else if (population_minus > 1 && population_minus <= 2 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':9})
  } else if (population_minus > 2 && population_minus <= 4 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':8})
  } else if (population_minus > 4 && population_minus <= 7 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':7})
  } else if (population_minus > 7 && population_minus <= 10 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':6})
  } else {
    total_score.push({'Total Age-Fifteen-Fortyfour Score':5})
  }
}
