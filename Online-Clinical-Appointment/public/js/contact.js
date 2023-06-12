const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");


const firebaseConfig = {
    apiKey: "AIzaSyCUx93xWZgwwkNV5LyYuD-LIyRlFak6KUg",
    authDomain: "online-clinical-appointm-58c80.firebaseapp.com",
    projectId: "online-clinical-appointm-58c80",
    storageBucket: "online-clinical-appointm-58c80.appspot.com",
    databaseURL:  "https://online-clinical-appointm-58c80-default-rtdb.firebaseio.com",
    messagingSenderId: "521342955524",
    appId: "1:521342955524:web:f4917758857339aadd0551"
  };
  

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
  
 const database = firebase.database()

 const ref = database.ref("messages")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const object = document.getElementById('object').value;
    const message = document.getElementById('message').value;
    
    ref.push({
        name:name,
        email:email,
        message:message,
        object: object
    })

    alert.style.display="block"

    
    setTimeout(()=>{
        alert.style.display="none"
    },2000)
    
    form.reset()
})










