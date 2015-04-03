// Write your jQuery code on line 3!
$(document).ready(function() {
    $(".red").mouseenter(function(){
    	$('.red').addClass('black');
    	$('.red').removeClass('red');
    });
    $(".black").click(function(){
    	$('.black').addClass('red');
    	$('.black').removeClass('black');
    });
});