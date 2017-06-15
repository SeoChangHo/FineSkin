$(document).ready(function(){

	if(! window.location.hash){
		window.location = window.location + '#weather';
		window.location.reload();
		loadPost();
	}
});

function loadPost() {
	  if (!!navigator.geolocation) 
	  {
	    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);  
	  }
	  else
	  {
	    alert("이 브라우저는 Geolocation을 지원하지 않습니다");
	  }
	}    
	 
function errorCallback(error)
{
    alert(error.message);
}    
	 
function successCallback(position) { 
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var sijuso = "";
        var gujuso = "";
        
        
        $("<div>").css({
        	margin:"5px"
        }).html(lat + ", " + lng).appendTo($("#location"));
        
        $.ajax({
	        url:"http://api.openweathermap.org/data/2.5/weather?lat=" +lat + "&lon=" + lng +"&APPID=92e7b2df78fb8de10187e0abd8c5a46b",
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
	              	
	              if(weather == "Haze"){
	            	  $("<div>").css({
	                      margin: "5px"
	                   }).html("날씨 : " + weather + " 온도 : " + temp.toFixed(2) + " 습도 : " + humidity ).appendTo($("#weather"));
	              }	             
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#weather").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
	     
	     $.ajax({
	        url:"https://apis.daum.net/local/geo/coord2addr?apikey=b9ab1680e352b1d4c5fe2b578928060e&longitude=" + lng + "&latitude=" + lat + "&inputCoordSystem=WGS84&output=json",
	        async:false,
	        type: "get",
	        dataType:"json",
	        success:function(data){
	           $(data).each(function(){
	        	   sijuso = this.name1;
	              gujuso = this.name2;
	              var name3 = this.name3;
	              	
            	  $("<div>").css({
                      margin: "5px"
                   }).html(sijuso + " " + gujuso + " " + name3 ).appendTo($("#juso"));
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#juso").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
	     
	     var gugugu = encodeURIComponent(gujuso);
	     
	     $.ajax({
	    	url: "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=" + gugugu +"&dataTerm=month&pageNo=3&numOfRows=1&ServiceKey=DZ2bt4fg7QwJULCmQrMY0R1hRCJ8zNpPGzLWL7s1%2FpI04Ih5gF6ggxbvvBpBkCoYSFlAOccv2kVnMUc7BNMOIw%3D%3D&ver=1.3&_returnType=json",
	        type: "get",
	        dataType:"json",
	        success:function(data){
	           $(data).each(function(){
	        	   var mise = this.list[0].pm25Grade;

            	  $("<div>").css({
                      margin: "5px"
                   }).html("미세먼지 지수 : " + mise).appendTo($("#mise"));
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#mise").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
	     
	      $.ajax({
	        url:"http://203.247.66.146/iros/RetrieveLifeIndexService/getUltrvLifeList?ServiceKey=DZ2bt4fg7QwJULCmQrMY0R1hRCJ8zNpPGzLWL7s1%2FpI04Ih5gF6ggxbvvBpBkCoYSFlAOccv2kVnMUc7BNMOIw%3D%3D&base_date=20170613&areaNo=1100000000&_type=json",
	        type: "get",
	        dataType:"json",
	        success:function(data){
	           $(data).each(function(){
	        	   var uv = this.Response.body.indexModel.today;

            	  $("<div>").css({
                      margin: "5px"
                   }).html("자외선 지수 : " + uv).appendTo($("#uv"));
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#uv").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
}
