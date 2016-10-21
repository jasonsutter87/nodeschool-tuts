// # Your Mission

// Modify your solution from the previous lesson to set bar = true inside zip(),
// then return the function zip as the result of foo()

// Once complete, execute scope-chains-closures verify <your-file.js> to verify your
// solution.

function foo(){
	var bar = true
	quux = "Tacos"
	function zip(){
		var	quux
		bar = false
	}
	return zip

	
}
