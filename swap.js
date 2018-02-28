
	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM

	//Thought proccess
	//loop through the elements in the string (input)
	//input 
	//upper case to lower case
	//then if letter in loop is lower case change to upper case
	//if upper case then change to lower case
	//add else if statment so that it can chose between
	// return the new string

	function swap(input){
		//your code is here
		var x = ''
		//debugger
		for (var i = 0; i < input.length; i++) {
			if(input[i] === input[i].toUpperCase()){
				x += input[i].toLowerCase(); //?------Check = // +=
			}else{
				x += input[i].toUpperCase();
			}
		}
		return x;

	}