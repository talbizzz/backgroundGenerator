/*COMMENT*/

var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");

function colorSetter() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ " , " 
	+ color2.value 
	+ ")";

	css.textContent= body.style.background + ";" ;
}

colorSetter();

color1.addEventListener("input", colorSetter);

color2.addEventListener("input", colorSetter);


