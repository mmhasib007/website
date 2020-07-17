$(document).ready(function(){


$('.navi').waypoint(function(direction){
    if(direction=='down'){
         $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }
   

});

    mixitup('#Grid');
});

$(document).ready(function(){
    $('i.fa-bars').click(function(){
      $('.mobileMenu').slideToggle();
    });
});