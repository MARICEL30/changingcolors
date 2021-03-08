const myColor1 = document.getElementById("color1");
const myColor2 = document.getElementById("color2");
const myColor3 = document.getElementById("color3");



const colors = [ "green", "red", "rgba(133,122,200)", "#00d4ff", "#f012be", "#790956", "#aa12f0"];



function getColors1() {
  const randomNumber = getRandomNumber();
  myColor1.style.background = colors[randomNumber];
   
  }


function getColors2() {
  const randomNumber = getRandomNumber();
  myColor2.style.background = colors[randomNumber];
   
  }


  function getColors3() {
  const randomNumber = getRandomNumber();
  myColor3.style.background = colors[randomNumber];
   
  }


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



myColor1.addEventListener("click", getColors1);
myColor2.addEventListener("click", getColors2);
myColor3.addEventListener("click", getColors3);
 





window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};