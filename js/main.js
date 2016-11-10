(function(){
  $('#portfolio').hide();
  $('#contact').hide();

  $('.navigation a').click(function(){
    var nav_link = $(this).text();
    // TODO: turn this if/elseif statement into a switch statement
    if(nav_link === 'Home'){
      $('#home').show();
      $('#portfolio').hide();
      $('#contact').hide();
    }
    else if(nav_link === 'Portfolio'){
      $('#portfolio').show();
      $('#home').hide();
      $('#contact').hide();
    }
    else if (nav_link === 'Contact'){
      $('#contact').show();
      $('#home').hide();
      $('#portfolio').hide();
    };
  });

})();
