
// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        //your code is here
       var accum = ''
       var count = 1

        for (var i = 0; i < input.length; i++) {
   				input.repeat()
   				accum = input[i].repeat(count++)
				        		
        	}
   				return accum + input;	
       	}  

       	

      //  function accum(input){
      //   //your code is here
      //  var accum = ''
      //  var count = 1

      //   for (var i = 0; i < input.length; i++) {
   			// accum = input[0].toUpperCase()
      //   		for (var x = 0; x < input.length; x++) {
      //   			accum = input[x].repeat(count++).
      //   		}
      //   		return accum;
      //   	}
   					
      //  	} 



      //  function accum(input){
      //   //your code is here
      //  var accum = ''
      //  var count = 1

      //   for (var i = 0; i < input.length; i++) {
   			// accum = input[i].toUpperCase()
      //   		return accum;
      //   	}
   					
      //  	}      
    
