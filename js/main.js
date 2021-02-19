$( document ).ready(function() {
    var windowTop = $(this).scrollTop(); 
    if(windowTop > 80){ $('.header').addClass('bg-custum_1'); }
    $(window).scroll(function(event) {	
        windowTop = $(this).scrollTop();
        if(windowTop > 80){ $('.header').addClass('bg-custum_1'); }
        else{ $('.header').removeClass('bg-custum_1'); } 
    });

});