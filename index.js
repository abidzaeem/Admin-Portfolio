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
