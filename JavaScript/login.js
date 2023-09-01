
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {
    // you can put any JS code here
   
// Get input values
var username = document.getElementById("username").value;
var rollno = document.getElementById('rollno').value;


var usernameCheck = /^[A-Za-z\sA-Za-z]+$/;
var rollnoCheck = /[0-9]*/;


// Perform simple validation (you should do more robust validation on the server-side)

// if (!rollnoCheck.test(rollno)) {
//   document.getElementById("loginStatus").innerHTML = "Don't need to type 'YKPT'";
//   return;
// }
// else 
if (!usernameCheck.test(username) || !rollno) {
document.getElementById("loginStatus").innerHTML = "Please enter both username and roll no.";
return;
} 

// Simulate a server-side login check (you should replace this with actual server-side validation)
// In this example, we assume the username is "admin" and the password is "password"
if (rollno > 21737 && rollno < 22581 || rollno == "000") {


window.location= "main.html"; // Redirecting to other page.
return false;

} else {
document.getElementById("loginStatus").innerHTML = "Login failed. Your're not in Semester-3.";
}

  });
});

function login() {
    // Get input values
    var username = document.getElementById("username").value;
    var rollno = document.getElementById('rollno').value;
  
    // Perform simple validation (you should do more robust validation on the server-side)
    if (!username || !rollno) {
      document.getElementById("loginStatus").innerHTML = "Please enter both username and roll no.";
      return;
    }
  
    // Simulate a server-side login check (you should replace this with actual server-side validation)
    // In this example, we assume the username is "admin" and the password is "password"
    if ((rollno > 21737 && rollno < 22581) || rollno == '000') {
  
      window.location = "index.html"; // Redirecting to other page.
      return false;
      // document.getElementById("hello").isConnected = "Login successful! Welcome, " + username + ".";
      //   var modal = document.getElementById('id01');
  
      //   // When the user clicks anywhere outside of the modal, close it
      //   window.onclick = function (event) {
      //     if (event.target == modal) {
      //       modal.style.display = "none";
      //     }
      //   }
  
  
  
  
  
    } else {
      document.getElementById("loginStatus").innerHTML = "Login failed. Your're not in Semester-3.";
    }
  }

