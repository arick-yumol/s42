let red = document.getElementById("red");
console.log(red);
// console.log(red.innerHTML);

/*const changeColor = (color) => {
	if (color = red) {
		color.style.background = "red"
	}
	else if (color = green) {
		color.style.background = "green"
	}
	else if (color = blue) {
		color.style.background = "blue"
	}
	else if (color = yellow) {
		color.style.background = "yellow"
	}
	color.innerHTML = "";
}*/
red.addEventListener("click", () => {
	red.style.background = "Red";
	// changeColor(red);
	red.innerHTML = "";
})



let green = document.getElementById("green");
green.addEventListener("click", () => {
	// green.style.background = "Green";
	changeColor(green);
	green.innerHTML = "";
})

let blue = document.getElementById("blue");
blue.addEventListener("click", () => {
	// blue.style.background = "Blue";
	changeColor(blue);
	blue.innerHTML = "";
})

let yellow = document.getElementById("yellow");
yellow.addEventListener("click", () => {
	yellow.style.background = "Yellow";
	yellow.innerHTML = "";
})

let purple = document.getElementById("purple");
purple.addEventListener("click", () => {
	purple.style.background = "Purple";
	purple.innerHTML = "";
})

let orange = document.getElementById("orange");
orange.addEventListener("click", () => {
	orange.style.background = "Orange";
	orange.innerHTML = "";
})

let blank = document.getElementById("blank");
blank.addEventListener("click", () => {
	blank.style.background = "White";
	blank.innerHTML = "";
})

let aqua = document.getElementById("aqua");
aqua.addEventListener("click", () => {
	aqua.style.background = "Aqua";
	aqua.innerHTML = "";
})

let maroon = document.getElementById("maroon");
maroon.addEventListener("click", () => {
	maroon.style.background = "Maroon";
	maroon.innerHTML = "";
})

let indigo = document.getElementById("indigo");
indigo.addEventListener("click", () => {
	indigo.style.background = "Indigo";
	indigo.innerHTML = "";
})

let gold = document.getElementById("gold");
gold.addEventListener("click", () => {
	gold.style.background = "Gold";
	gold.innerHTML = "";
})

let black = document.getElementById("black");
black.addEventListener("click", () => {
	black.style.background = "Black";
	black.innerHTML = "";
})

