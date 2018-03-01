 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40

	//round the number to 10's
	//check if number is in lower than 10's
	//else return number in 10's
 function closestMultipleOf10(num) {

 	var x = Math.round(num * 10);
 	return x;
}
 	// for (var i = 0; i < num; i++) {
 	// 	if(i < num ){
 	// 		return 
 	// }