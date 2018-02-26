// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		//i should store the charsters inside data sructure like array
		var charaCotainer=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"]
		// i should  itrate through this array
		for(var i=0;i<charaCotainer.length;i++){
			// i want to find te macthed one and retuen the index
			if(charaCotainer[i]===character){
				return i;

			}
		} 
		//your code is here
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		//your code is here
		var n = 0;
		var s = ''
		var newArr = []
		var count = 0

		if(n === s) {
			for (var i = 0; i < n.length; i++) {
			newArr = s + n[i]
			return 
			}
		}
	}