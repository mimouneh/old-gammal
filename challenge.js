$(document).ready (function(){
    $('.submit_date').click(function (){

      var $selectedMonth = $('.month').find('option:selected');
      //Added with the EDIT
      var monthIndex = parseInt($selectedMonth.val());
      var day = parseInt($('.day').val());

      if(monthIndex == 0 || monthIndex == 2 || monthIndex == 4
        || monthIndex == 6 ||monthIndex == 7 || monthIndex == 10
        || monthIndex == 10 ){
            if(day<1 || day>31){
              $('.errors').text('Day Format should be between 1 - 31');
              $('.errors').addClass("red");
              $('.main_container').hide();
              return;
              }
        }else if(monthIndex == 3 || monthIndex == 5|| monthIndex == 7
          || monthIndex == 9 ){
            $('.errors').text('Day Format should be between 1 - 30');
            $('.errors').addClass("red");
            $('.main_container').hide();
            return;
          }else if(monthIndex == 1){
            $('.errors').text('Day Format should be between 1 - 28');
            $('.errors').addClass("red");
            $('.main_container').hide();
            return;
          }

        var userYear = parseInt($('.year').val());
        var now = new Date ();
        var age = now.getFullYear() - userYear;

        if (age >= 18 ){
            $('.errors').text('Accept!');
            $('.errors').addClass("green");
        } else {
            $('.errors').text('Sorry ! You can not enter your Kid ');
            $('.errors').addClass("red");
        } 
            $('.main_container').hide();
        });
});
