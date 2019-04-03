function industry_Selector(demographic_data,industry_key){

// INDUSTRY SPORTS CALLBACK FUNCTION FROM INDUSTRY SELECTOR
  if (industry_key == "sports") {
    sports_Calculator(demographic_data,function(){
      median_Age_Scorer(demographic_data,function(){
        $('.median_Age').text(
          `${score_explanation[1]['Median Age Score Specifics']}
          `)
        $('#how_Score_Median_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[0]['Median Age Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })
      total_Population_Scorer(demographic_data,function(){
        $('.total_Population').text(

          `${score_explanation[3]['Total Population Score Specifics']}
          `)
        $('#how_Score_Totalpopulation_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[2]['Total Population Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      five_to_fourteen_Scorer(demographic_data,function(){
        $('.fivetofourteen_Age').text(

          `${score_explanation[5]['Five To Fourteen Age Score Specifics']}
          `)
        $('#how_Score_Fivetofourteen_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[4]['Five To Fourteen Age Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      fifteen_to_fortyfour_Scorer(demographic_data,function(){
        $('.fiftytofortyfour_Age').text(

          `${score_explanation[7]['Fifteen To Fortyfour Age Score Specifics']}
          `)
        $('#how_Score_Fiftytofortyfour_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[6]['Fifteen To Fourtyfour Age Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      estimate_Earnings_Scorer(demographic_data,function(){
        $('.estimate_Earnings').text(

          `${score_explanation[9]['Estimate Earnings Score Specifics']}
          `)
        $('#how_Score_Estimate_Earnings_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[8]['Estimate Earnings Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){


          $('#myModal').hide()

          })
        })
      })

      travel_Time_Scorer(demographic_data,function(){
        $('.work_Travel_Time').text(

          `${score_explanation[11]['Work Travel Time Score Specifics']}
          `)
        $('#how_Score_Work_Traveltime_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[10]['Work Travel Time Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })

      })

      mean_Income(demographic_data,function(){
        $('.mean_Income_Earnings').text(

          `${score_explanation[13]['Mean Income Score Specifics']}
          `)
        $('#how_Score_Mean_Income_Btn').click(function(){

          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[12]['Mean Income Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      high_School_Degreeorhigher(demographic_data,function(){
        $('.highSchool_Degreeorhigher_Score').text(

          `${score_explanation[15]['Highschool Score Specifics']}
          `)
        $('#how_Score_Highschool_Btn').click(function(){

          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[14]['Highschool Education Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      bachelors_Degreeorhigher(demographic_data,function(){
        $('.bachelors_Degreeorhigher_Score').text(

          `${score_explanation[17]['Bachelors Score Specifics']}
          `)
        $('#how_Score_Highschool_Btn').click(function(){

          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[16]['Bachelors Education Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })


      $('.scores_Explanation_Btn').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.sports').show()
        $('.sports_ul').show("slow")
      })

      let total = 0
      for (let i=0;i<total_score.length;i++){
        const values = Object.values(total_score[i]);
        let number_value = parseInt(values)
        total += number_value
      }
      let aggregated_Score = total/total_score.length
      console.log(aggregated_Score)
      $('.aggregated_Score').show()
      $('.aggregated_Score').text(`
        SCORE: ${aggregated_Score}`)
      $('.aggregated_Score').append(`
          <br><span style="font-size:12px;color:yellow">For questions about score click arrow below</span>`)
      $('.total_score_container').show()
      $('.scores_Explanation_Btn').show()
      $('#modal_loading').hide()

  })

// INDUSTRY CONSTRUCTION CALLBACK FUNCTION FROM INDUSTRY SELECTOR
  } else if (industry_key == "construction") {
    construction_Calculator(demographic_data,function(){

      median_Age_Scorer(demographic_data,function(){
        console.log(score_explanation[1]['Median Age Score Specifics'])
        $('.construction_median_Age').text(
          `${score_explanation[1]['Median Age Score Specifics']}
          `)
        $('#construction_how_Score_Median_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[0]['Median Age Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })

      population_poverty(demographic_data,function(){
        console.log(score_explanation[2]['Poverty Percentage Explanation'])
        $('.construction_poverty_percentage').text(
          `${score_explanation[3]['Poverty Score Specifics']}
          `)
        $('#construction_how_Score_Poverty_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[2]['Poverty Percentage Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })

      has_no_vehicle(demographic_data,function(){
        console.log(score_explanation[4]['No Vehicle Percentage Explanation'])
        console.log(score_explanation[5]['No Vehicle Score Specifics'])
        $('.no_vehicle_percentage').text(
          `${score_explanation[5]['No Vehicle Score Specifics']}
          `)
        $('#construction_how_Score_novehicle_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[4]['No Vehicle Percentage Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })

      })

      high_School_Degreeorhigher(demographic_data,function(){
        $('.construction_highschool_percentage').text(

          `${score_explanation[7]['Highschool Score Specifics']}
          `)
        $('#construction_how_Score_highschool_Btn').click(function(){

          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[6]['Highschool Education Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      $('.construction').show()
      $('.scores_Explanation_Btn').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.construction_ul').show("slow")
      })
      let total = 0
      for (let i=0;i<total_score.length;i++){
        const values = Object.values(total_score[i]);
        let number_value = parseInt(values)
        total += number_value
      }
      let aggregated_Score = total/total_score.length
      console.log(aggregated_Score)
      $('.aggregated_Score').show()
      $('.aggregated_Score').text(`
        SCORE: ${aggregated_Score}`)
      $('.aggregated_Score').append(`
            <br><span style="font-size:12px;color:yellow">For questions about score click arrow below</span>`)
      $('.total_score_container').show()
      $('.scores_Explanation_Btn').show()
      $('#modal_loading').hide()
    })

// INDUSTRY RESTAURANT CALLBACK FUNCTION FROM INDUSTRY SELECTOR
  } else if (industry_key == "restaurant") {
    restaurant_Calculator(demographic_data,function(){

      median_Age_Scorer(demographic_data,function(){
        console.log(score_explanation[1]['Median Age Score Specifics'])
        $('.restaurant_median_Age').text(
          `${score_explanation[1]['Median Age Score Specifics']}
          `)
        $('#restaurant_how_Score_Median_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[0]['Median Age Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })

      population_poverty(demographic_data,function(){
        console.log(score_explanation[2]['Poverty Percentage Explanation'])
        $('.restaurant_poverty_percentage').text(
          `${score_explanation[3]['Poverty Score Specifics']}
          `)
        $('#restaurant_how_Score_Poverty_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[2]['Poverty Percentage Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })

      has_no_vehicle(demographic_data,function(){

        $('.no_vehicle_percentage').text(
          `${score_explanation[5]['No Vehicle Score Specifics']}
          `)
        $('#restaurant_how_Score_novehicle_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[4]['No Vehicle Percentage Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })

      })

      high_School_Degreeorhigher(demographic_data,function(){
        $('.restaurant_highschool_percentage').text(

          `${score_explanation[7]['Highschool Score Specifics']}
          `)
        $('#restaurant_how_Score_highschool_Btn').click(function(){

          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[6]['Highschool Education Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      $('.scores_Explanation_Btn').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.restaurant').show()
        $('.restaurant_ul').show("slow")
      })
      let total = 0
      for (let i=0;i<total_score.length;i++){
        const values = Object.values(total_score[i]);
        let number_value = parseInt(values)
        total += number_value
      }
      let aggregated_Score = total/total_score.length
      console.log(aggregated_Score)
      $('.aggregated_Score').show()
      $('.aggregated_Score').text(`
        SCORE: ${aggregated_Score}`)
      $('.aggregated_Score').append(`
            <br><span style="font-size:12px;color:yellow">For questions about score click arrow below</span>`)
      $('.total_score_container').show()
      $('.scores_Explanation_Btn').show()
      $('#modal_loading').hide()
    })
  } else if (industry_key == "automotive") {
    automotive_Calculator(demographic_data,function(){

      median_Age_Scorer(demographic_data,function(){
        console.log(score_explanation[1]['Median Age Score Specifics'])
        $('.automotive_median_Age').text(
          `${score_explanation[1]['Median Age Score Specifics']}
          `)
        $('#automotive_how_Score_Median_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[0]['Median Age Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })

      population_poverty(demographic_data,function(){
        console.log(score_explanation[2]['Poverty Percentage Explanation'])
        $('.automotive_poverty_percentage').text(
          `${score_explanation[3]['Poverty Score Specifics']}
          `)
        $('#automotive_how_Score_Poverty_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[2]['Poverty Percentage Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })
      })

      has_no_vehicle(demographic_data,function(){

        $('.no_vehicle_percentage').text(
          `${score_explanation[5]['No Vehicle Score Specifics']}
          `)
        $('#automotive_how_Score_novehicle_Btn').click(function(){
          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[4]['No Vehicle Percentage Explanation']}
            `)

          $('#myModal').show()
          $('.close').click(function(){
            let modal_popup_list = modal_paragraph.children()
            modal_popup_list.remove()
            $('#myModal').hide()

          })
        })

      })

      high_School_Degreeorhigher(demographic_data,function(){
        $('.automotive_highschool_percentage').text(

          `${score_explanation[7]['Highschool Score Specifics']}
          `)
        $('#automotive_how_Score_highschool_Btn').click(function(e){


          let modal_paragraph = $('#myModal').children().find('p')

          modal_paragraph.text(`
            ${score_explanation[6]['Highschool Education Explanation']}
            `)
        $('#myModal').show()
        $('.close').click(function(){
          let modal_popup_list = modal_paragraph.children()
          modal_popup_list.remove()
          $('#myModal').hide()

          })
        })
      })

      $('.scores_Explanation_Btn').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.automotive').show()
        $('.automotive_ul').show("slow")
      })
      let total = 0
      for (let i=0;i<total_score.length;i++){
        const values = Object.values(total_score[i]);
        let number_value = parseInt(values)
        total += number_value
      }
      let aggregated_Score = total/total_score.length
      console.log(aggregated_Score)
      $('.aggregated_Score').show()
      $('.aggregated_Score').text(`
        SCORE: ${aggregated_Score}`)
      $('.aggregated_Score').append(`
            <br><span style="font-size:12px;color:yellow">For questions about score click arrow below</span>`)
      $('.total_score_container').show();
      $('.scores_Explanation_Btn').show()
      $('#modal_loading').hide()

    })


  } else {
    console.log('no industry was selected')
    $('#modal_loading').hide()
  }
}


function sports_Calculator(demographic_data,callback){
  callback();
  }
