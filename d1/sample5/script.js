getInput = () => {
	let input1 = document.querySelector("#input1").value;	// .value is an attribute from the sample5.html
	console.log(input1);
}

/*let btn = document.querySelector("#btn");
btn.addEventListener("click", getInput);*/

let input1 = document.querySelector("#input1");
input1.addEventListener("keyup", getInput);

/*let input1 = document.querySelector("#input1");
input1.addEventListener("keydown", getInput);*/