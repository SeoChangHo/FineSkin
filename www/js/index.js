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
	
	$("#sido").change(function(){
		setGugun();
	});
	$("#gugun").change(function(){
			
		console.log($("#sido").val() + " " +$("#gugun").val());
		$.ajax({
	        url:"https://map.vworld.kr/search.do?apiKey=A9F644A3-F64C-3FC9-9531-B935E68FF8AF&q=" + $("#sido").val() + " " +$("#gugun").val() + "&category=Juso&pageUnit=10&pageIndex=1&output=json",
	        type: "get",
	        dataType:"jsonp",
	        success:function(data){
	           $(data).each(function(){
	        	   var lat = this.LIST[0].ypos;
	        	   var lng = this.LIST[0].xpos;
	        	   
	        	   weatherSystem(lat, lng, 1);
	           });
	        },
	        error: function(xhr, textStatus, errMsg){
	           alert("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
	        }
	     })
	     
	     window.close();
	});
	
	var setGugun = function(){
		var gugun = document.getElementById("gugun");
		var area = new Array();
		
		   var area1 = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
		   var area2 = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
		   var area3 = ["대덕구","동구","서구","유성구","중구"];
		   var area4 = ["광산구","남구","동구","북구","서구"];
		   var area5 = ["남구","달서구","동구","북구","서구","수성구","중구","달성군"];
		   var area6 = ["남구","동구","북구","중구","울주군"];
		   var area7 = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
		   var area8 = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
		   var area9 = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
		   var area10 = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
		   var area11 = ["계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
		   var area12 = ["군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
		   var area13 = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
		   var area14 = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
		   var area15 = ["거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
		   var area16 = ["서귀포시","제주시"];
		   
		   if($("#sido").val()=="서울특별시"){
		   	   area = area1;
		   }else if($("#sido").val()=="인천광역시"){
			   area = area2;
		   }else if($("#sido").val()=="대전광역시"){
			   area = area3;
		   }else if($("#sido").val()=="광주광역시"){
			   area = area4;
		   }else if($("#sido").val()=="대구광역시"){
			   area = area5;
		   }else if($("#sido").val()=="울산광역시"){
			   area = area6;
		   }else if($("#sido").val()=="부산광역시"){
			   area = area7;
		   }else if($("#sido").val()=="경기도"){
			   area = area8;
		   }else if($("#sido").val()=="강원도"){
			   area = area9;
		   }else if($("#sido").val()=="충청북도"){
			   area = area10;
		   }else if($("#sido").val()=="충청남도"){
			   area = area11;
		   }else if($("#sido").val()=="전라북도"){
			   area = area12;
		   }else if($("#sido").val()=="전라남도"){
			   area = area13;
		   }else if($("#sido").val()=="경상북도"){
			   area = area14;
		   }else if($("#sido").val()=="경상남도"){
			   area = area15;
		   }else if($("#sido").val()=="제주특별자치도"){
			   area = area16;
		   }
		   
		   gugun.options.length=0;
		   
		for(i=0; i<area.length; i++){
			
			var gugunOption = document.createElement("option");
			gugunOption.text = area[i];
			gugunOption.value = area[i];
			
			gugun.options.add(gugunOption);
		}
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
        
        console.log(lat + ", " + lng);
        
        weatherSystem(lat, lng, 0);
}

function weatherSystem(latitude, longtitude, gubun){
	var lat = latitude;
	var lng = longtitude;
	$(".messagetext").empty();
    
	$.ajax({
        url:"https://apis.daum.net/local/geo/coord2addr?apikey=b9ab1680e352b1d4c5fe2b578928060e&longitude=" + lng + "&latitude=" + lat + "&inputCoordSystem=WGS84&output=json",
        type: "get",
        dataType:"jsonp",
        success:function(data){
           $(data).each(function(){
        	  var sijuso = this.name1;   //시주소
              var gujuso = this.name2;  //구주소
              var name3 = this.name3; //동주소
              
        	  console.log(sijuso + " " + gujuso + " " + name3);
        	  if(gubun == 0){
        		  $(".location").html(gujuso + " " + name3);
        	  }else if(gubun==1){
        		  $(".location").html(sijuso + " " + gujuso);
        	  }
        	  
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
        	   var mise = this.data.iaqi.pm10.v;
        	   
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
        url:"http://203.247.66.146/iros/RetrieveLifeIndexService/getUltrvLifeList?ServiceKey=DZ2bt4fg7QwJULCmQrMY0R1hRCJ8zNpPGzLWL7s1%2FpI04Ih5gF6ggxbvvBpBkCoYSFlAOccv2kVnMUc7BNMOIw%3D%3D&base_date=20170613&areaNo=1100000000&_type=json",
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
