var firebaseConfig = {
    apiKey: "AIzaSyDdhC5UVYow7Ndw0omLBG9J4dF2ng6LcQU",
    authDomain: "form-815f4.firebaseapp.com",
    databaseURL: "https://form-815f4-default-rtdb.firebaseio.com",
    projectId: "form-815f4",
    storageBucket: "form-815f4.appspot.com",
    messagingSenderId: "540330415280",
    appId: "1:540330415280:web:3b69c68470bd60b4199775"
  };
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    var userRef = firebase.database().ref('users');

    function addUser(user,name,email,dob,placeOfBirth) {
        if (user != null) {
            var newUserRef = userRef.push();
            newUserRef.set({
                name: name,
                email: email,
                dob: dob,
                placeOfBirth: placeOfBirth
            });
         }
      }

	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
        var name = document.getElementById("name");
        var dob = document.getElementById("dob");
        var placeOfBirth = document.getElementById("placeOfBirth");
		
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var userId = userCredential.user;
            addUser(userId,name,email,dob,placeOfBirth);
            window.location.href = 'home.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
	}
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");

		firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            window.location.href = 'home.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });

	}
	
	function signOut(){
		
		firebase.auth().signOut().then(() => {
            window.location.href = 'index.html';
          }).catch((error) => {
            alert(error);
        });
		
	}
	
