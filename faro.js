$(function() {
	$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 800,
	  fade: true,
	  slide: 'div',
	  cssEase: 'linear',
	  autoplay: true, 
	  arrows: false,
	});
	
	$("#alabama").click(function(){
		$("#googmap").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3154.5928118302563!2d-122.41097939999999!3d37.7526959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x04d563cdb72ff9be!2sTaquerias+El+Farolito!5e0!3m2!1sen!2sus!4v1420433432425")
	});
});
