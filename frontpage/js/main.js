
jQuery(document).ready(function($) {
 
  $(".more").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});
