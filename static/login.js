$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });


  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  import { getDatabase, set, ref,update } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
  
 
  const firebaseConfig = {
    apiKey: "AIzaSyBwtY-WstBFKSC0RgaVZLKLQcTAo2lp_DU",
    authDomain: "musify-auth.firebaseapp.com",
    projectId: "musify-auth",
    storageBucket: "musify-auth.appspot.com",
    messagingSenderId: "894158850293",
    appId: "1:894158850293:web:a53e049911363e11d5ddbc",
    measurementId: "G-EWVD2V9L5N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const database = getDatabase(app);
  
  const registerbtn = document.getElementById("registerbtn")
  const loginbtn = document.getElementById("loginbtn")
  
console.log(loginbtn)

  loginbtn.addEventListener('click',(e)=>{

    const email = document.getElementById("loginemail").value
    const password = document.getElementById("loginpassword").value
    

    signInWithEmailAndPassword(auth, email, password)
      
    .then((userCredential) => {
  // Signed in 
        const user = userCredential.user;
  // ... user.uid

  var lgdate =new Date()
  update(ref(database, 'users/' + user.uid), {
  last_login : lgdate,
})
.then(() => {
// Data saved successfully!
window.location.replace("home.html");
})
.catch((error) => {
// The write failed...
alert(error);
});

          
})
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // 
      });

});





  
  
 