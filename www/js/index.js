
var init = function(){
	
	$("#owl-demo").owlCarousel({
			 
		      autoPlay: 100000, //Set AutoPlay to 3 seconds
		 
		      items : 1,
		      itemsDesktop : [1199,3],
		      itemsDesktopSmall : [979,3]
	 });
 }

$(document).on("pagebeforecreate", init);

