function industry_Selector(demographic_data,industry_key){

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

      $('.scores_container').show()
      $('.scores_Explanation_Btn').click(function(){
        $('.scores_ul').toggle()
      })


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
