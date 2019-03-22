function industry_Selector(demographic_data,industry_key){

  if (industry_key == "sports") {
    sports_Calculator(demographic_data,function(){
      median_Age_Scorer(demographic_data)
      total_Population_Scorer(demographic_data,function(){
        console.log(score_explanation)
        $('.demographic_container').append(`
          <li>${score_explanation[0]['Total Population Explanation']}</li>
          <li>${score_explanation[1]['Total Population Score Specifics']}</li>
          `)
      })
      five_to_fourteen_Scorer(demographic_data)
      fifteen_to_fortyfour_Scorer(demographic_data)
      estimate_Earnings_Scorer(demographic_data)
      travel_Time_Scorer(demographic_data)


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


function sports_Calculator(demographic_data,callback){
  callback();
  }
