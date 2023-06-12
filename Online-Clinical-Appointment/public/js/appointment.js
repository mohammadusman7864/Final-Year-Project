
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
      
      // Reference to the appointments collection in Firebase
      var appointmentsRef = firebase.database().ref('appointments');
      
      // Function to submit the appointment data to Firebase
      function bookAppointment(event) {
        event.preventDefault();
        
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var department = document.getElementById('department').value;
        var doctor = document.getElementById('doctor').value;
        var date = document.getElementById('datesin').value;
        var time = document.getElementById('timesin').value;
        
        // Create a new appointment object
        var newAppointmentRef = appointmentsRef.push();
        newAppointmentRef.set({
          name: name,
          email: email,
          department: department,
          doctor: doctor,
          date: date,
          time: time,
          status: 'pending' // Default status is 'pending'
        });
        
        // Reset form
        document.getElementById('appointmentForm').reset();
        
        // Display success message
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(()=>{
          successMessage.style.display="none"
      },1000)
      }