
var firebaseConfig = {
      apiKey: "AIzaSyDfPbNCn0tyAfzgAhWtS_1_reF0rGAyrSQ",
      authDomain: "class-92-28dd4.firebaseapp.com",
      databaseURL: "https://class-92-28dd4-default-rtdb.firebaseio.com",
      projectId: "class-92-28dd4",
      storageBucket: "class-92-28dd4.appspot.com",
      messagingSenderId: "36525797488",
      appId: "1:36525797488:web:6ccee6af380adbe02144b5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome - " + user_name + "!";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose:"adding room"
          }

          );

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
