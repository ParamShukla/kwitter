var firebaseConfig = {
      apiKey: "AIzaSyDWfBGYxSeX0OAAdev4nfjYkWV-4gTlxD0",
      authDomain: "kwitter-179eb.firebaseapp.com",
      databaseURL: "https://kwitter-179eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-179eb",
      storageBucket: "kwitter-179eb.appspot.com",
      messagingSenderId: "626134039480",
      appId: "1:626134039480:web:4a4c4f18e40d8a8e23ad4d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location ="index.html";
      localStorage.removeItem("keyuser");
}

      