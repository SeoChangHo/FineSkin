$(document).ready(function(){

	$("#owl-demo").owlCarousel({
	      autoPlay: 100000, //Set AutoPlay to 3 seconds
	      items : 1,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	});
	
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
        
        console.log(lat + ", " + lng);
         
	     $.ajax({
	        url:"//apis.daum.net/local/geo/coord2addr?apikey=b9ab1680e352b1d4c5fe2b578928060e&longitude=" + lng + "&latitude=" + lat + "&inputCoordSystem=WGS84&output=json",
	        type: "get",
	        dataType:"jsonp",
	        success:function(data){
	           $(data).each(function(){
	        	   sijuso = this.name1;   //시주소
	              gujuso = this.name2;  //구주소
	              var name3 = this.name3; //동주소
	              
            	  console.log(sijuso + " " + gujuso + " " + name3);
            	  $(".location").html(gujuso + " " + name3);
            	  
            	  var gugugu = encodeURIComponent(gujuso);
            	  
            	  $.ajax({
          	        url:"https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+gugugu +", il')&format=json",
          	        type: "get",
          	        dataType:"jsonp",
          	        success:function(data){
          	           $(data).each(function(){
          	              var weather = this.query.results.channel.item.condition.code;    //날씨코드
          	              var weathertext = this.query.results.channel.item.condition.text; //날씨텍스트
          	              var temp = this.query.results.channel.item.condition.temp;    //기온
          	              var humidity = this.query.results.channel.atmosphere.humidity;     //습도
          	              
          	            	  
          	            	  $(".wlist_txt1").html("날씨 : " + weather);
          	            	  $(".wlist_txt2").html("온도 : " + ((temp-32)/1.8).toFixed(1));
          	            	  $(".wlist_txt3").html("습도 : " + humidity);
          	           });
          	        },
          	        error: function(xhr, textStatus, errMsg){
          	           $("#weather").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
          	        }
          	     })
            	  
            	  
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#juso").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
	     
	     $.ajax({
	    	url: "https://api.waqi.info/feed/geo:" + lat +";" + lng +"/?token=c5341d7416d6afdaa504f77aab84acc3c38bb8a8",
	        type: "get",
	        dataType:"jsonp",
	        success:function(data){
	           $(data).each(function(){
	        	   var mise = this.data.iaqi.pm25.v;
	        	   
	        	  if(mise <= 50){
	        		  $(".wlist_txt5").html("미세먼지: 좋음");  
	        	  }else if(mise <= 100){
	        		  $(".wlist_txt5").html("미세먼지: 보통");
	        		  $("<p>").html("미세먼지보통").appendTo(".messagetext");
	        	  }else if(mise<= 150){
	        		  $(".wlist_txt5").html("미세먼지: 민감");
	        		  $("<p>").html("미세먼지에 민감하신분은 조심!!").appendTo(".messagetext");
	        	  }else if(mise<= 200){
	        		  $(".wlist_txt5").html("미세먼지: 나쁨");
	        	  }else if(mise<=300){
	        		  $(".wlist_txt5").html("미세먼지:매우나쁨");
	        	  }else{
	        		  $(".wlist_txt5").html("미세먼지:위험");
	        	  }
	        	  
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#mise").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
	     
	      $.ajax({
	        url:"//203.247.66.146/iros/RetrieveLifeIndexService/getUltrvLifeList?ServiceKey=DZ2bt4fg7QwJULCmQrMY0R1hRCJ8zNpPGzLWL7s1%2FpI04Ih5gF6ggxbvvBpBkCoYSFlAOccv2kVnMUc7BNMOIw%3D%3D&base_date=20170613&areaNo=1100000000&_type=json",
	        type: "get",
	        dataType:"json",
	        success:function(data){
	           $(data).each(function(){
	        	   var uv = this.Response.body.indexModel.today; //자외선지수

	        	if(uv<=2){
	        		$(".wlist_txt4").html("자외선: 낮음");
	        		$("<p>").html("자외선낮음").appendTo(".messagetext");
	        	}else if(uv<=5){
	        		$(".wlist_txt4").html("자외선: 보통");
	        		$("<p>").html("자외선보통").appendTo(".messagetext");
	        	}else if(uv<=7){
	        		$(".wlist_txt4").html("자외선: 높음");
	        		$("<p>").html("자외선높음").appendTo(".messagetext");
	        	}else if(uv<=10){
	        		$(".wlist_txt4").html("자외선:매우높음");
	        		$("<p>").html("자외선매우높음").appendTo(".messagetext");
	        	}else{
	        		$(".wlist_txt4").html("자외선: 위험");
	        		$("<p>").html("자외선위험").appendTo(".messagetext");
	        	}

	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#uv").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
}
