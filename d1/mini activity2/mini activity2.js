let items = document.getElementsByClassName("colorMe");
// console.log(items);

/*const changeColor = () => {
	alert('working');
}

// for.. of iterate a collection. look it up
// FOR each item OF items
for (const item of items) {		// you may use const or let
	// console.log(item);
	item.addEventListener("click", changeColor)
}*/


// Sir Joshua Nuestro's code
for (const item of items) {
	item.addEventListener("click", () => {
		let colorThis = prompt();
		item.style.backgroundColor = colorThis;
	})
}


/*// Sir Joey Cabal's code
let items = document.getElementsByClassName("colorMe");
// console.log(items);

for (const item of items) {
	item.addEventListener("click", () => {
		let color = prompt("Enter Color Name");
		item.style.backgroundColor = color;
		item.innerHTML = color
	});
}
*/