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
        
        console.log(lat + ", " + lng);
        
        $.ajax({
	        url:"http://api.openweathermap.org/data/2.5/weather?lat=" +lat + "&lon=" + lng +"&APPID=92e7b2df78fb8de10187e0abd8c5a46b",
	        type: "get",
	        dataType:"json",
	        success:function(data){
	           $(data).each(function(){
	              var weather = this.weather[0].main;    //날씨
	              var sky = this.weather[0].description;   //하늘상태
	              var temp = this.main.temp - 273.15;   //기온
	              var pressure = this.main.pressure;       //압력
	              var humidity = this.main.humidity;      //습도
	              var clouds = this.clouds.all;				//구름
	              
	            	  
	            	  if(weather=="Clear"){
	            		  $(".wlist_txt1").html("날씨 : 맑음");  
	            	  }else if(weather=="Clouds"){
	            		  $(".wlist_txt1").html("날씨 : 구름");
	            	  }else if(weather=="Haze"){
	            		  $(".wlist_txt1").html("날씨 : 흐림");
	            	  }else if(weather=="Rain"){
	            		  $(".wlist_txt1").html("날씨 : 비");
	            	  }else{
	            		  $(".wlist_txt1").html("날씨 : ?");
	            	  }
	            	  
	            	  $(".wlist_txt2").html("온도 : " + temp.toFixed(2));
	            	  $(".wlist_txt3").html("습도 : " + humidity);
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
	        	   sijuso = this.name1;   //시주소
	              gujuso = this.name2;  //구주소
	              var name3 = this.name3; //동주소
	              
            	  console.log(sijuso + " " + gujuso + " " + name3);
            	  $(".location").html(gujuso + " " + name3);
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
	        	   var mise = this.list[0].pm25Grade; 		  //미세먼지등급
	        	   var misenong = this.list[0].pm10Value; //미세먼지농도
	        	   
	        	  if(mise==1){
	        		  $(".wlist_txt5").html("미세먼지: 좋음");  
	        	  }else if(mise==2){
	        		  $(".wlist_txt5").html("미세먼지: 보통");
	        	  }else if(mise==3){
	        		  $(".wlist_txt5").html("미세먼지: 나쁨");
	        	  }else if(mise==4){
	        		  $(".wlist_txt5").html("미세먼지:매우나쁨");
	        	  }
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
	        	   var uv = this.Response.body.indexModel.today; //자외선지수

	        	if(uv<=2){
	        		$(".wlist_txt4").html("자외선: 낮음");
	        	}else if(uv<=5){
	        		$(".wlist_txt4").html("자외선: 보통");
	        	}else if(uv<=7){
	        		$(".wlist_txt4").html("자외선: 높음");
	        	}else if(uv<=10){
	        		$(".wlist_txt4").html("자외선:매우높음");
	        	}else{
	        		$(".wlist_txt4").html("자외선: 위험");
	        	}

	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           $("#uv").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
}
