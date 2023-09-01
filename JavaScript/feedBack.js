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
   
alert("Thanks for your feed back!")
window.location= "./FoodAndDrink.html";// Redirecting to other page.


  });
});


function date() {
    var date = Date();
document.getElementById("demo").innerHTML = date;
}