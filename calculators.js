
function median_Age_Scorer(demographic_data){
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

function total_Population_Scorer(demographic_data,callback){


  let population_target = demographic_data[0]['Total Population']
  let population_model = demographic_data[1]['Total Population']
  let population_diff = population_target - population_model
  score_explanation.push({'Total Population Explanation':`The score is based on positive correlation between the total population of our target county and the county we are using as a model`})
  if (Math.sign(population_diff)== 1 || Math.sign(population_diff)== 0){
    total_score.push({'Total Population Score':10})
    score_explanation.push({'Total Population Score Specifics':`It received a score of 10 because target county has ${population_target} and the model county has a population of ${population_model}. This is an equal or greater population than county used a model`})
  } else if (Math.sign(population_diff)== -1 && Math.abs(population_diff)<20000){
    total_score.push({'Total Population Score':9})
    score_explanation.push({'Total Population Score Specifics':`It received a score of 9 because the target county has a smaller population ${population_target} and the model county has a population of ${population_model}.Our target county population difference is less than 20,000 of model county`})
  } else if (Math.sign(population_diff)== -1 && (Math.abs(population_diff)>=20000) && (Math.abs(population_diff)<80000)){
    total_score.push({'Total Population Score':8})
    score_explanation.push({'Total Population Score Specifics':`It received a score of 8 because the target county has a population ${population_target} and the model county has a population of ${population_model}. Our target county has between 20,000 to 80,000 less than model county `})
  } else if (Math.sign(population_diff)== -1 && (Math.abs(population_diff)>=80000) && (Math.abs(population_diff)<120000)){
    total_score.push({'Total Population Score':7})
    score_explanation.push({'Total Population Score Specifics':`It received a score of 7 because the target county has a population ${population_target} and the model county has a population of ${population_model}. Our target county has between 80,000 to 120,000 less than model county `})
  } else if (Math.sign(population_diff)== -1 && (Math.abs(population_diff)>=120000) && (Math.abs(population_diff)<200000)){
    total_score.push({'Total Population Score':6})
    score_explanation.push({'Total Population Score Specifics':`It received a score of 6 because the target county has a population ${population_target} and the model county has a population of ${population_model}. Our target county has between 120,000 to 200,000 less than model county `})
  } else {
    total_score.push({'Total Population Score':5})
    score_explanation.push({'Total Population Score Specifics':`It received a score of 5 because the target county has a population of ${population_target} and the model county has a population of ${population_model}. Our target county has  at least 200,000 inhabitants less than model county`})
  }

  callback(score_explanation)
}

function five_to_fourteen_Scorer(demographic_data){
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

function fifteen_to_fortyfour_Scorer(demographic_data){
  let population_target = demographic_data[0]['Percent Population 15 to 44 years']
  let population_model = demographic_data[1]['Percent Population 15 to 44 years']
  let population_minus = population_model - population_target
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

function estimate_Earnings_Scorer(demographic_data){
  let population_target = demographic_data[0]['Estimate Earnings']
  let population_model = demographic_data[1]['Estimate Earnings']
  let earnings_substraction = population_model - population_target
    if (earnings_substraction <= 3500){
      total_score.push({'Total Estimate Earnings Score':10})
    } else if (earnings_substraction > 3500 && earnings_substraction <= 4500 ){
      total_score.push({'Total Estimate Earnings Score':9})
    } else if (earnings_substraction > 4500 && earnings_substraction <= 7500 ){
      total_score.push({'Total Estimate Earnings Score':8})
    } else if (earnings_substraction > 7500 && earnings_substraction <= 10000 ){
      total_score.push({'Total Estimate Earnings Score':7})
    } else if (earnings_substraction > 10000 && earnings_substraction <= 13000 ){
      total_score.push({'Total Estimate Earnings Score':6})
    } else {
      total_score.push({'Total Estimate Earnings Score':5})
    }

}

function travel_Time_Scorer(demographic_data){
  let population_target = demographic_data[0]['Mean Travel Time to Work']
  let population_model = demographic_data[1]['Mean Travel Time to Work']
  let travel_Time_Difference = population_model - population_target
  if (travel_Time_Difference >= 0){
    total_score.push({'Mean Travel Time to Work':10})
  } else if (travel_Time_Difference < 0 && travel_Time_Difference <= 10 ){
    total_score.push({'Mean Travel Time to Work':9})
  } else if (travel_Time_Difference < 10 && travel_Time_Difference <= 15 ){
    total_score.push({'Mean Travel Time to Work':8})
  } else if (travel_Time_Difference < 15 && travel_Time_Difference <= 20 ){
    total_score.push({'Mean Travel Time to Work':7})
  } else if (travel_Time_Difference < 20 && travel_Time_Difference <= 30 ){
    total_score.push({'Mean Travel Time to Work':6})
  } else {
    total_score.push({'Mean Travel Time to Work':5})
  }
}

//Definitions of functions that based on industry we can choose what calculations we will be using
function sports_Calculator(demographic_data,callback){
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
