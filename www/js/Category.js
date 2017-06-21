(function() {
	  
	  const config = {
			apiKey: "AIzaSyBE5vMFfd91z_MXwb1CeBKsZWQEYPisY9s",
  		    authDomain: "thisskin-ios-fe4b6.firebaseapp.com",
  		    databaseURL: "https://thisskin-ios-fe4b6.firebaseio.com",
  		    projectId: "thisskin-ios-fe4b6",
  		    storageBucket: "thisskin-ios-fe4b6.appspot.com",
  		    messagingSenderId: "253616346483"
	  };
	  firebase.initializeApp(config);

	  
	  console.log("1");
	  //Get Elements
	  
	  const preObject = document.getElementById('object');
	 
	  console.log("2");
	  
	  //Create references
	  const   dbRefObject = firebase.database().ref().child('object');
		  
	  console.log("3");
	  //Sync object changes
	  dbRefObject.on('value', snap => {preObject.innerText =snap.val()});
	  
	  console.log("4");
		  	  
		}());








