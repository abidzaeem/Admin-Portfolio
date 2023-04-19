//Intro --  Text RGB
setInterval(changeColor, 900);
function changeColor() {
  let rgb = document.getElementById("text_rgb");
  if (rgb.style.color == "black") {
    rgb.style.color = " rgb(45, 127, 242)";
  } else {
    rgb.style.color = "black";
  }
}

// Submit Validation
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let submit = document.getElementById("valid_submit")
let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
submit.addEventListener(click, function(){
  return alert("sdsads");
})
