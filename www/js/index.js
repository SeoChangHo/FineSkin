$(document).ready(function(){
	
	$("[data-role=page]").on("pageshow", function(event){
		
		if(this.id == "weatherpage"){
				
		    $("#owl-demo").owlCarousel({
			      autoPlay: 100000, //Set AutoPlay to 3 seconds
			      items : 1,
			      itemsDesktop : [1199,3],
			      itemsDesktopSmall : [979,3]
			});
		}
	});
	
});

var lat = 37.5272032 ;
var lon = 127.154105; 	
 function weather(){
     $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?lat=" +lat + "&lon=" + lon +"&APPID=92e7b2df78fb8de10187e0abd8c5a46b",
        type: "get",
        dataType:"json",
        success:function(data){
           $(data).each(function(){
              var weather = this.weather[0].main;
              var sky = this.weather[0].description;
              var temp = this.main.temp - 273.15;
              var pressure = this.main.pressure;
              var humidity = this.main.humidity;
              var clouds = this.clouds.all;
              	
              $("<p>").css({
                 border:"solid 2px pink",
                 margin: "5px"
              }).html("날씨 : " + weather + " /하늘 : " + sky +  " / 온도 : " + temp + " / 압력 : " + pressure + " / 습도 : " + humidity + " / 구름 : " + clouds  ).appendTo($("#weather"));
           });
        },
        error: function(xhr, textStatus, errMsg){
           $("#weather").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
        }
     })
  }