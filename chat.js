// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyDFB20eLp5TXPO58Ny6xvZ9X8i81FoQZfw",
  authDomain: "chat-ac3e5.firebaseapp.com",
  databaseURL: "https://chat-ac3e5-default-rtdb.firebaseio.com",
  projectId: "chat-ac3e5",
  storageBucket: "chat-ac3e5.appspot.com",
  messagingSenderId: "374556750272",
  appId: "1:374556750272:web:ad19d2e01825f99c899825"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

   localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



