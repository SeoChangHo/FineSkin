(function()
		{
			  const config = 
			  {
					    apiKey: "AIzaSyBE5vMFfd91z_MXwb1CeBKsZWQEYPisY9s",
					    authDomain: "thisskin-ios-fe4b6.firebaseapp.com",
					    databaseURL: "https://thisskin-ios-fe4b6.firebaseio.com",
					    projectId: "thisskin-ios-fe4b6",
					    storageBucket: "thisskin-ios-fe4b6.appspot.com",
					    messagingSenderId: "253616346483"
			  };
			  firebase.initializeApp(config);
			  
	
			  //Get Elements			  
			  const txtEmail = document.getElementById("txtEmail");
			  const txtPassword = document.getElementById("txtPassword");
			  const btnLogin = document.getElementById("btnLogin");
			  const btnSignUp= document.getElementById("btnSignUp");
			  const btnLogout = document.getElementById("btnLogout");
			  
			  
			  
			  //Add Login Event
			  btnLogin.addEventListener("click", e=>
			  {
				 
				  //Get email and pass
				  const email = txtEmail.value;
				  const pass = txtPassword.value;
				  const auth = firebase.auth();
				  
				  
				  //Sign in
				  const promise = auth.signInWithEmailAndPassword(email, pass);  
				
				  
				  promise
				  .then(e=> location.href="../index.html")
				  .catch(e => console.log(e.message));  
			  });
			  
			  
			  
			  
			  /*
			  //SignUp
			  btnSignUp.addEventListener("click", e =>
			  {
				  //Get email and pass
				  const email = txtEmail.value;
				  const pass = txtPassword.value;
				  const auth = firebase.auth();
				  
				  
				  //Sign in
				  const promise = auth.createUserWithEmailAndPassword(email, pass);  
				  
				  promise.catch(e => console.log(e.message)); 
			  })
			  */
			  
			  
			  
			  //Add a real time Listener
			  /*firebase.auth().onAuthStateChanged(firebaseUser => 
			  {
				  if(firebaseUser)
					  {
					  	console.log(firebaseUser);
					  	btnLogout.classList.remove("hide");
					  }
				  else
					  {
					  	console.log("not logged in");
					  	btnLogout.classList.add("hide");
					  }
			  })
			  */
		}());











