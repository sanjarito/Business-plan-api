
function median_Age_Scorer(demographic_data,callback){
  let target_county_med_age = demographic_data[0]['Median Age']
  let model_county_med_age = demographic_data[1]['Median Age']
  let age_diff = target_county_med_age - model_county_med_age
  let age_diff_abs = Math.abs(age_diff)
  score_explanation.push({'Median Age Explanation':`The score is calculated directly from the median age difference between model county and target county.`})
  if (age_diff_abs <= 1){
     total_score.push({'Median Age Score':10})
     score_explanation.push({'Median Age Score Specifics':`It received a score of 10 because target county has a median age of ${target_county_med_age} and the model county has a median age of ${model_county_med_age}. The difference is 1 year or less.`})
  } else if (age_diff_abs > 1 && age_diff_abs < 5){
     total_score.push({'Median Age Score':9})
     score_explanation.push({'Median Age Score Specifics':`It received a score of 9 because target county has a median age of ${target_county_med_age} and the model county has a median age of ${model_county_med_age}. The difference is between 1 and 5 years.`})
  } else if (age_diff_abs >= 5 && age_diff_abs < 10){
     total_score.push({'Median Age Score':8})
     score_explanation.push({'Median Age Score Specifics':`It received a score of 8 because target county has a median age of ${target_county_med_age} and the model county has a median age of ${model_county_med_age}. The difference is between 5 and 10 years.`})
  } else if (age_diff_abs >= 10 && age_diff_abs < 20){
     total_score.push({'Median Age Score':7})
     score_explanation.push({'Median Age Score Specifics':`It received a score of 7 because target county has a median age of ${target_county_med_age} and the model county has a median age of ${model_county_med_age}. The difference is between 10 and 20 years.`})
  } else if (age_diff_abs >= 20 && age_diff_abs <25){
     total_score.push({'Median Age Score':6})
     score_explanation.push({'Median Age Score Specifics':`It received a score of 6 because target county has a median age of ${target_county_med_age} and the model county has a median age of ${model_county_med_age}. The difference is between 20 and 25 years.`})
  } else {
     total_score.push({'Median Age Score':5})
     score_explanation.push({'Median Age Score Specifics':`It received a score of 8 because target county has a median age of ${target_county_med_age} and the model county has a median age of ${model_county_med_age}. The difference is more than 25 years.`})
  }
  callback(score_explanation)

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

function five_to_fourteen_Scorer(demographic_data,callback){
  let population_target = demographic_data[0]['Percent Population 5 to 14 years']
  let population_model = demographic_data[1]['Percent Population 5 to 14 years']
  let population_minus = population_model - population_target
  score_explanation.push({'Five To Fourteen Age Explanation':`The score is a substraction of the percentage of population that falls under the age group of 5-14 for model county minus target county `})
  if (population_minus<= 1){
    total_score.push({'Total Age-Five-Fourteen Score':10})
    score_explanation.push({'Five To Fourteen Age Score Specifics':`It received a score of 10 because model county has a percentage of: ${population_model} that fall under the 5-14 age category and the target county has a respective percentage of  ${population_target}.The difference is 1% or less`})
  } else if (population_minus > 1 && population_minus <= 2 ){
    total_score.push({'Total Age-Five-Fourteen Score':9})
    score_explanation.push({'Five To Fourteen Age Score Specifics':`It received a score of 9 because model county has a percentage of: ${population_model} that fall under the 5-14 age category and the target county has a respective percentage of  ${population_target}.The difference is between 1.01% and 2%`})
  } else if (population_minus > 2 && population_minus <= 4 ){
    total_score.push({'Total Age-Five-Fourteen Score':8})
    score_explanation.push({'Five To Fourteen Age Score Specifics':`It received a score of 8 because model county has a percentage of: ${population_model} that fall under the 5-14 age category and the target county has a respective percentage of  ${population_target}.The difference is between 2.01% and 4%`})
  } else if (population_minus > 4 && population_minus <= 7 ){
    total_score.push({'Total Age-Five-Fourteen Score':7})
    score_explanation.push({'Five To Fourteen Age Score Specifics':`It received a score of 7 because model county has a percentage of: ${population_model} that fall under the 5-14 age category and the target county has a respective percentage of  ${population_target}.The difference is between 4.01% and 7%`})
  } else if (population_minus > 7 && population_minus <= 10 ){
    total_score.push({'Total Age-Five-Fourteen Score':6})
    score_explanation.push({'Five To Fourteen Age Score Specifics':`It received a score of 6 because model county has a percentage of: ${population_model} that fall under the 5-14 age category and the target county has a respective percentage of  ${population_target}.The difference is between 7.01% and 10%`})
  } else {
    total_score.push({'Total Age-Five-Fourteen Score':5})
    score_explanation.push({'Five To Fourteen Age Score Specifics':`It received a score of 5 because model county has a percentage of: ${population_model} that fall under the 5-14 age category and the target county has a respective percentage of  ${population_target}.The difference is greater than 10%`})
  }
  callback(score_explanation)
}

function fifteen_to_fortyfour_Scorer(demographic_data,callback){
  let population_target = demographic_data[0]['Percent Population 15 to 44 years']
  let population_model = demographic_data[1]['Percent Population 15 to 44 years']
  let population_minus = population_model - population_target
  score_explanation.push({'Fifteen To Fourtyfour Age Explanation':`The score is a substraction of the percentage of population that falls under the age group of 15-44 for model county minus target county `})
  if (population_minus<= 1){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':10})
    score_explanation.push({'Fifteen To Fortyfour Age Score Specifics':`It received a score of 10 because model county has a percentage of: ${population_model} that fall under the 15-44 age category and the target county has a respective percentage of  ${population_target}.The difference is 1% or less`})
  } else if (population_minus > 1 && population_minus <= 2 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':9})
    score_explanation.push({'Fifteen To Fortyfour Age Score Specifics':`It received a score of 9 because model county has a percentage of: ${population_model} that fall under the 15-44 age category and the target county has a respective percentage of  ${population_target}.The difference is between 1.01% and 2%`})
  } else if (population_minus > 2 && population_minus <= 4 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':8})
    score_explanation.push({'Fifteen To Fortyfour Age Score Specifics':`It received a score of 8 because model county has a percentage of: ${population_model} that fall under the 15-44 age category and the target county has a respective percentage of  ${population_target}.The difference is between 2.01% and 4%`})
  } else if (population_minus > 4 && population_minus <= 7 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':7})
    score_explanation.push({'Fifteen To Fortyfour Age Score Specifics':`It received a score of 7 because model county has a percentage of: ${population_model} that fall under the 15-44 age category and the target county has a respective percentage of  ${population_target}.The difference is between 4.01% and 7%`})
  } else if (population_minus > 7 && population_minus <= 10 ){
    total_score.push({'Total Age-Fifteen-Fortyfour Score':6})
    score_explanation.push({'Fifteen To Fortyfour Age Score Specifics':`It received a score of 6 because model county has a percentage of: ${population_model} that fall under the 15-44 age category and the target county has a respective percentage of  ${population_target}.The difference is between 7.01% and 10%`})
  } else {
    total_score.push({'Total Age-Fifteen-Fortyfour Score':5})
    score_explanation.push({'Fifteen To Fortyfour Age Score Specifics':`It received a score of 5 because model county has a percentage of: ${population_model} that fall under the 15-44 age category and the target county has a respective percentage of  ${population_target}.The difference is greater than 10%`})
  }
  callback()
}

function estimate_Earnings_Scorer(demographic_data,callback){
  let population_target = demographic_data[0]['Estimate Earnings']
  let population_model = demographic_data[1]['Estimate Earnings']
  let earnings_substraction = population_model - population_target
  score_explanation.push({'Estimate Earnings Explanation':`The score is a substraction of the estimate earnings of the model county population minus the target county popuation.`})
    if (earnings_substraction <= 3500){
      total_score.push({'Total Estimate Earnings Score':10})
      score_explanation.push({'Estimate Earnings Score Specifics':`It received a score of 10 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is 3500$ or less`})
    } else if (earnings_substraction > 3500 && earnings_substraction <= 4500 ){
      total_score.push({'Total Estimate Earnings Score':9})
      score_explanation.push({'Estimate Earnings Score Specifics':`It received a score of 9 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is between 3501$ and 4500$`})
    } else if (earnings_substraction > 4500 && earnings_substraction <= 7500 ){
      total_score.push({'Total Estimate Earnings Score':8})
      score_explanation.push({'Estimate Earnings Score Specifics':`It received a score of 8 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is between 4501$ and 7500$`})
    } else if (earnings_substraction > 7500 && earnings_substraction <= 10000 ){
      total_score.push({'Total Estimate Earnings Score':7})
      score_explanation.push({'Estimate Earnings Score Specifics':`It received a score of 7 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is between 7501$ and 10000$`})
    } else if (earnings_substraction > 10000 && earnings_substraction <= 13000 ){
      total_score.push({'Total Estimate Earnings Score':6})
      score_explanation.push({'Estimate Earnings Score Specifics':`It received a score of 6 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is between 10001$ and 13000$`})
    } else {
      total_score.push({'Total Estimate Earnings Score':5})
      score_explanation.push({'Estimate Earnings Score Specifics':`It received a score of 5 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is greater than 13001$`})
    }
callback()
}


function travel_Time_Scorer(demographic_data,callback){
  let population_target = demographic_data[0]['Mean Travel Time to Work']
  let population_model = demographic_data[1]['Mean Travel Time to Work']
  let travel_Time_Difference = population_model - population_target
  score_explanation.push({'Work Travel Time Explanation':`The score is a substraction of the estimate travel time to work from the model county minus the target county.`})
  if (travel_Time_Difference >= 0){
    total_score.push({'Mean Travel Time to Work':10})
    score_explanation.push({'Work Travel Time Score Specifics':`It received a score of 10 because model county has an estimate work travel time of ${population_model} and target county ${population_target}.The difference in travel time is less or greater to zero, meaning target county travel time to work is less than model county.`})
  } else if (travel_Time_Difference < 0 && travel_Time_Difference <= 10 ){
    total_score.push({'Mean Travel Time to Work':9})
    score_explanation.push({'Work Travel Time Score Specifics':`It received a score of 9 because model county has an estimate work travel time of ${population_model} and target county ${population_target}.The difference in travel time is greater than zero and less than 10 minutes, meaning target county travel time to work is greater than model county by ~10 minutes.`})
  } else if (travel_Time_Difference < 10 && travel_Time_Difference <= 15 ){
    total_score.push({'Mean Travel Time to Work':8})
    score_explanation.push({'Work Travel Time Score Specifics':`It received a score of 8 because model county has an estimate work travel time of ${population_model} and target county ${population_target}.The difference in travel time is greater than 10 minutes and less than 15 minutes, meaning target county travel time to work is greater than model county by ~15 minutes.`})
  } else if (travel_Time_Difference < 15 && travel_Time_Difference <= 20 ){
    total_score.push({'Mean Travel Time to Work':7})
    score_explanation.push({'Work Travel Time Score Specifics':`It received a score of 7 because model county has an estimate work travel time of ${population_model} and target county ${population_target}.The difference in travel time is greater than 15 minutes and less than 20 minutes, meaning target county travel time to work is greater than model county by ~20 minutes.`})
  } else if (travel_Time_Difference < 20 && travel_Time_Difference <= 30 ){
    total_score.push({'Mean Travel Time to Work':6})
    score_explanation.push({'Work Travel Time Score Specifics':`It received a score of 6 because model county has an estimate work travel time of ${population_model} and target county ${population_target}.The difference in travel time is greater than 20 minutes and less than 30 minutes, meaning target county travel time to work is greater than model county by ~30 minutes.`})
  } else {
    total_score.push({'Mean Travel Time to Work':5})
    score_explanation.push({'Work Travel Time Score Specifics':`It received a score of 5 because model county has an estimate work travel time of ${population_model} and target county ${population_target}.The difference in travel time is greater than 30 minutes, meaning target county travel time to work is greater than model county by atleast 30 minutes.`})
  }
  callback()
}

function mean_Income(demographic_data,callback){
  let population_target = demographic_data[0]['Mean income']
  let population_model = demographic_data[1]['Mean income']
  let mean_Income_Substraction = population_target - population_model

  score_explanation.push({'Mean Income Explanation':`The score is a substraction of the mean income of a house hold at the model county minus the target county.`})
    if (mean_Income_Substraction <= 3500){
      total_score.push({'Total Mean Income Score':10})
      score_explanation.push({'Mean Income Score Specifics':`It received a score of 10 because model county has a median household income of  ${population_model} and target county has a median income of  ${population_target}.The difference is 3500$ or less`})
    } else if (mean_Income_Substraction > 3500 && mean_Income_Substraction <= 4500 ){
      total_score.push({'Total Mean Income Score':9})
      score_explanation.push({'Mean Income Score Specifics':`It received a score of 9 because model county has a median household income of  ${population_model} and target county has a median income of  ${population_target}.The difference is between 3501$ and 4500$`})
    } else if (mean_Income_Substraction > 4500 && mean_Income_Substraction <= 7500 ){
      total_score.push({'Total Mean Income Score':8})
      score_explanation.push({'Mean Income Score Specifics':`It received a score of 8 because model county has a median household income of  ${population_model} and target county has a median income of  ${population_target}.The difference is between 4501$ and 7500$`})
    } else if (mean_Income_Substraction > 7500 && mean_Income_Substraction <= 10000 ){
      total_score.push({'Total Mean Income Score':7})
      score_explanation.push({'Total Mean Income Score':`It received a score of 7 because model county population has an estimate earnings of  ${population_model} and target county has earnings of  ${population_target}.The difference is between 7501$ and 10000$`})
    } else if (mean_Income_Substraction > 10000 && mean_Income_Substraction <= 13000 ){
      total_score.push({'Total Mean Income Score':6})
      score_explanation.push({'Mean Income Score Specifics':`It received a score of 9 because model county has a median household income of  ${population_model} and target county has a median income of  ${population_target}.The difference is between 10001$ and 13000`})
    } else {
      total_score.push({'Total Mean Income Score':5})
      score_explanation.push({'Mean Income Score Specifics':`It received a score of 9 because model county has a median household income of  ${population_model} and target county has a median income of  ${population_target}.The difference is more than 13001`})
    }
callback()
}

function high_School_Degreeorhigher(demographic_data,callback){
  let population_target = demographic_data[0]['High School Degree or Higher']
  let population_model = demographic_data[1]['High School Degree or Higher']
  let percentage_substraction = population_model - population_target
  console.log(population_target)
  console.log(population_model)
  console.log(percentage_substraction)
  score_explanation.push({'Highschool Education Explanation':`The score is a substraction of the percentage of the population that completed Highschool education or higher of the model county minus the target county.`})
    if (percentage_substraction <= 1){
      total_score.push({'Total Highschool Score':10})
      score_explanation.push({'Highschool Score Specifics':`It received a score of 10 because model county has a percentage of  ${population_model} that have Highschool or higher education and target county has ${population_target}.Target county has 1% less or a higher percentage of Highschool educated population`})
    } else if (percentage_substraction > 1 && percentage_substraction <= 3 ){
      total_score.push({'Total Highschool Score':9})
      score_explanation.push({'Highschool Score Specifics':`It received a score of 9 because model county has a percentage of  ${population_model} that have Highschool or higher education and target county has ${population_target}.The difference is between 1-3%`})
    } else if (percentage_substraction > 3 && percentage_substraction <= 5 ){
      total_score.push({'Total Highschool Score':8})
      score_explanation.push({'Highschool Score Specifics':`It received a score of 8 because model county has a percentage of  ${population_model} that have Highschool or higher education and target county has ${population_target}.The difference is between 3.01-5%`})
    } else if (percentage_substraction > 5 && percentage_substraction <= 8 ){
      total_score.push({'Total Highschool Score':7})
      score_explanation.push({'Highschool Score Specifics':`It received a score of 7 because model county has a percentage of  ${population_model} that have Highschool or higher education and target county has ${population_target}.The difference is between 5.01-8%`})
    } else if (percentage_substraction > 8 && percentage_substraction <= 10 ){
      total_score.push({'Total Highschool Score':6})
      score_explanation.push({'Highschool Score Specifics':`It received a score of 6 because model county has a percentage of  ${population_model} that have Highschool or higher education and target county has ${population_target}.The difference is between 8.01-10%`})
    } else {
      total_score.push({'Total Highschool Score':5})
      score_explanation.push({'Highschool Score Specifics':`It received a score of 5 because model county has a percentage of  ${population_model} that have Highschool or higher education and target county has ${population_target}.Target model's population has at least 10% more Highschool or higher degrees`})
    }
callback()
}

function bachelors_Degreeorhigher(demographic_data,callback){
  let population_target = demographic_data[0]['Bachelors Degree or Higher']
  let population_model = demographic_data[1]['Bachelors Degree or Higher']
  let percentage_substraction = population_model - population_target
  console.log(population_target)
  console.log(population_model)
  console.log(percentage_substraction)
  score_explanation.push({'Bachelors Education Explanation':`The score is a substraction of the percentage of the population that completed college or higher of the model county minus the target county.`})
    if (percentage_substraction <= 1){
      total_score.push({'Total Bachelors Score':10})
      score_explanation.push({'Bachelors Score Specifics':`It received a score of 10 because model county has a percentage of  ${population_model} that have a Bachelors or higher education and target county has ${population_target}.Target county has 1% less or a higher percentage of college educated population`})
    } else if (percentage_substraction > 1 && percentage_substraction <= 3 ){
      total_score.push({'Total Bachelors Score':9})
      score_explanation.push({'Bachelors Score Specifics':`It received a score of 9 because model county has a percentage of  ${population_model} that have a Bachelors or higher education and target county has ${population_target}.The difference is between 1-3%`})
    } else if (percentage_substraction > 3 && percentage_substraction <= 5 ){
      total_score.push({'Total Bachelors Score':8})
      score_explanation.push({'Bachelors Score Specifics':`It received a score of 8 because model county has a percentage of  ${population_model} that have a Bachelors or higher education and target county has ${population_target}.The difference is between 3.01-5%`})
    } else if (percentage_substraction > 5 && percentage_substraction <= 8 ){
      total_score.push({'Total Bachelors Score':7})
      score_explanation.push({'Bachelors Score Specifics':`It received a score of 7 because model county has a percentage of  ${population_model} that have a Bachelors or higher education and target county has ${population_target}.The difference is between 5.01-8%`})
    } else if (percentage_substraction > 8 && percentage_substraction <= 10 ){
      total_score.push({'Total Bachelors Score':6})
      score_explanation.push({'Bachelors Score Specifics':`It received a score of 6 because model county has a percentage of  ${population_model} that have a Bachelors or higher education and target county has ${population_target}.The difference is between 8.01-10%`})
    } else {
      total_score.push({'Total Bachelors Score':5})
      score_explanation.push({'Bachelors Score Specifics':`It received a score of 5 because model county has a percentage of  ${population_model} that have a Bachelors or higher education and target county has ${population_target}.Target model's population has at least 10% more Bachelors or higher degrees`})
    }
callback()
}

function population_poverty(demographic_data,callback){
  console.log(demographic_data[0])
  console.log(demographic_data[1])
  let population_target = demographic_data[0]['Population % for whom poverty status is determined']
  let population_model = demographic_data[1]['Population % for whom poverty status is determined']
  let percentage_substraction = population_model - population_target
  console.log(population_target)
  console.log(population_model)

  score_explanation.push({'Poverty Percentage Explanation':`The score is a substraction of the percentage of the population that lives under poverty for model county minus the target county.`})
    if (percentage_substraction >= 1){
      total_score.push({'Total Poverty Score':10})
      score_explanation.push({'Poverty Score Specifics':`It received a score of 10 because model county has a percentage of  ${population_model} the population living under poverty and target county has ${population_target}.Target county has 1% difference in poverty or less`})
    } else if (percentage_substraction < 1 && percentage_substraction <= 3 ){
      total_score.push({'Total Poverty Score':9})
      score_explanation.push({'Poverty Score Specifics':`It received a score of 9 because model county has a percentage of  ${population_model} the population living under poverty and target county has ${population_target}.Target county has between 1.01% to 3% more poverty than county model`})
    } else if (percentage_substraction < 3 && percentage_substraction <= 5 ){
      total_score.push({'Total Poverty Score':8})
      score_explanation.push({'Poverty Score Specifics':`It received a score of 8 because model county has a percentage of  ${population_model} the population living under poverty and target county has ${population_target}.Target county has between 3.01% to 5% more poverty than county model`})
    } else if (percentage_substraction < 5 && percentage_substraction <= 8 ){
      total_score.push({'Total Poverty Score':7})
      score_explanation.push({'Poverty Score Specifics':`It received a score of 7 because model county has a percentage of  ${population_model} the population living under poverty and target county has ${population_target}.Target county has between 5.01% to 8% more poverty than county model`})
    } else if (percentage_substraction < 8 && percentage_substraction <= 10 ){
      total_score.push({'Total Poverty Score':6})
      score_explanation.push({'Poverty Score Specifics':`It received a score of 6 because model county has a percentage of  ${population_model} the population living under poverty and target county has ${population_target}.Target county has between 8.01% to 10% more poverty than county model`})
    } else {
      total_score.push({'Total Poverty Score':5})
      score_explanation.push({'Poverty Score Specifics':`It received a score of 5 because model county has a percentage of  ${population_model} the population living under poverty and target county has ${population_target}.Target county has more than 10% more poverty than county model`})
    }
callback()
}


function has_no_vehicle(demographic_data,callback){
  console.log(demographic_data[0]['percentage that has no vehicle'])
  console.log(demographic_data[1]['percentage that has no vehicle'])
  let population_target = demographic_data[0]['percentage that has no vehicle']
  let population_model = demographic_data[1]['percentage that has no vehicle']
  let percentage_substraction = population_model - population_target
  console.log(population_target)
  console.log(population_model)

  score_explanation.push({'No Vehicle Percentage Explanation':`The score is a substraction of the percentage of the population that has no vechicle for model county minus the target county.`})
    if (percentage_substraction >= 1){
      total_score.push({'Total Poverty Score':10})
      score_explanation.push({'No Vehicle Score Specifics':`It received a score of 10 because model county has a percentage of  ${population_model} of people without a vechicle and target county has ${population_target}.Target county has 1% or less of a difference in percentage of people without a vehicle than model county`})
    } else if (percentage_substraction < 1 && percentage_substraction <= 3 ){
      total_score.push({'Total Poverty Score':9})
      score_explanation.push({'No Vehicle Score Specifics':`It received a score of 9 because model county has a percentage of  ${population_model} of people without a vechicle and target county has ${population_target}.Target county has between 1.01% and 3% more people without a vechicle`})
    } else if (percentage_substraction < 3 && percentage_substraction <= 5 ){
      total_score.push({'Total Poverty Score':8})
      score_explanation.push({'No Vehicle Score Specifics':`It received a score of 8 because model county has a percentage of  ${population_model} of people without a vechicle and target county has ${population_target}.Target county has between 3.01% and 5% more people without a vechicle`})
    } else if (percentage_substraction < 5 && percentage_substraction <= 8 ){
      total_score.push({'Total Poverty Score':7})
      score_explanation.push({'No Vehicle Score Specifics':`It received a score of 7 because model county has a percentage of  ${population_model} of people without a vechicle and target county has ${population_target}.Target county has between 5.01% and 8% more people without a vechicle`})
    } else if (percentage_substraction < 8 && percentage_substraction <= 10 ){
      total_score.push({'Total Poverty Score':6})
      score_explanation.push({'No Vehicle Score Specifics':`It received a score of 6 because model county has a percentage of  ${population_model} of people without a vechicle and target county has ${population_target}.Target county has between 8.01% and 10% more people without a vechicle`})
    } else {
      total_score.push({'Total Poverty Score':5})
      score_explanation.push({'No Vehicle Score Specifics':`It received a score of 5 because model county has a percentage of  ${population_model} of people without a vechicle and target county has ${population_target}.Target county has more than 10% of people without a vechicle than model county.`})
    }
callback()
}







//Definitions of functions that based on industry we can choose what calculations we will be using
function sports_Calculator(demographic_data,callback){
  callback();
  }
function construction_Calculator(demographic_data,callback){
  console.log('inside construction calculator')
  callback();
}
function restaurant_Calculator(demographic_data,callback){
  console.log('inside restaurant calculator function')
  callback();
}

function automotive_Calculator(demographic_data,callback){
  console.log('inside automotive calculator function')
  callback();
}

// function beauty_Calculator(demographic_data){
//   console.log('inside beauty calculator function')
//   console.log(demographic_data)
// }
