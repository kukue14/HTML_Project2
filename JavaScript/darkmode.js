// function myFunction() {


// }

function changeImage() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var theme;
    
    // var image = document.getElementById('dark-light');


    // if (image.src.match("turnOff")) {
    //     image.src = "./images/turnOn.png";
    //     theme = "DARK";
    // } else {
    //     image.src = "./images/turnOff.png";
    //     theme = "LIGHT"
    // }
    if(element.classList.contains("dark-mode")){
        console.log("Dark Mode");
        theme = "DARK";
    }else{
        console.log("Light mode")
        theme="LIGHT";
    }

    localStorage.setItem("PageTheme", JSON.stringify(theme));

}
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
    document.body.classList = "dark-mode";
}
// function myFunction() {
//     var element = document.getElementById('dark-mode');
//     element.classList.toggle("dark-mode");
//  }

