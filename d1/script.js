// This line creates an alert box.
alert("Hello!");

// This line print the words Hello from the console.
console.log("Hello from the console");

// This will select the element with an ID of mainHeading and save the result in a variable called "name".
let name = document.getElementById("mainHeading");	// try to remove this later

// This will access the innerHTML property of name and display it in the console.
console.log(name.innerHTML); // innerHTML property will display 
console.log(name);	// shows the whole line (.html) that contains the mainHeading id

name.innerHTML = "Tuitt Coding Bootcamp";	// why did this take effect before line 11 and line 12?