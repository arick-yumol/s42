/*let heading = document.getElementById("mainHeading");	// select element

// This will set the color to red
heading.style.color = "Red";

// This will set the background color to yellow
heading.style.background = "Yellow";*/

/*
Selecting an element with an ID of mainHeading and assigning it to the variable heading.
*/


let heading = document.getElementById("mainHeading");

// Add an Event Listener
heading.addEventListener("click", ()=> {	// use arrow function
	console.log("You clicked me");
	heading.style.color="Green";
});	// accept two ..

