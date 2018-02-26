// Write a function called  averageAge that accpets an array of objects and return the average ages for the people 
//who are between 18 and 50
 

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
 function averageAge(people) { 
       // YOUR CODE HERE 
       var index = 0;
       for (var i = 0; i < people.length; i++) {
       	if(people[i].age > 18 && people[i].age < 50){
        	index = index + people[i].age 
        		}	
       		}
       		return index/people.length
        } 

averageAge(people); // 43+36+44+24 = 36.74
//should be 29

function select(obj, arr){
    var x = {}
    for(var key in obj) {
        for (var i = 0; i < arr.length; i++) {
            if(key === arr[i])
            x[key] = obj[key]
        }    
    }  
      return x;
  }


function pluck(arr,str){
  var x = []
  for (var i = 0; i < arr.length; i++) {
   x.push(arr[i][str])
  }
  return x
}

var people = [

      {name: {first: 'Alyssa', middle: 'P.', last: 'Hacker'}, age: 26},
      {name: {first: 'Louis', last: 'Reasoner'}, age: 21},
      {name: {first: 'Ben', last: 'Bitdiddle'}, age: 34},
      {name: {first: 'Eva', middle: 'Lu', last: 'Ator'}, age: 40},
      {name: {first: 'Lem', middle: 'E.', last: 'Tweakit'}, age: 45}
    ]; 


function extend (des,source){
  for(var k in source){
    des[k] = source[k]
  }
  return des
}


function counterr(){
  var counter = 0

  return function(){
    counter = counter+1
    return counter
  }
}



function counterInit(startAt){
  var counter = startAt

  return function(){
    counter = counter+1
    return counter
  }
}


function makeAccount(initial){
  var balance = initial;


  return function(amount){
    if(balance - amount >= 0){
      balance = balance - amount;
      return 'Here is your money$' + amount
    }
    return 'Your broke!'
  }
}

function pow(expo){
  return function(base){
    if(base === undefined){
      return expo;
    }
    return pow(expo * base)
  }
}



     

 function makeAccount1(initial) {
     var balance = initial;
     arr = []
     return {
          withdraw: function(amount) {
          if (balance - amount >= 0) {
          balance = balance - amount;
          return 'Here’s your money: $' + amount;
     }
     return 'Insufficient funds.';
},
     deposit: function(amount) {
          balance = balance + amount;
          return 'Your balance is: $' + balance;
          }, 

     checkBalance: function(){
        return balance;
     },
      transactionHistory: function(trans) {
            var arr = [];
            var x = (array.length - 1) - trans;
            for (var i = array.length - 1; i > x; i--)
                arr.unshift(array[i]);
            return arr;
        }  
  }
}



function counterUpDown(){
  var counter = 0

  return {
    up: function(){
      counter = counter+1
      return counter
    },
    down: function(){
      counter = counter-1
      return counter
    },
    reset: function(){
      counter = 0;
      return counter;
    }
  }
}



function makeAccount(initial) {
    var account = {};
    account.balance = initial;
    account.withdraw = withdraw;
    account.deposit = deposit;
    return account;
}

var withdraw = function(amount) {
    if (this.balance - amount >= 0) {
        this.balance = this.balance - amount;
        return 'Here is your money: $' + amount;
    }
    return 'Insufficient funds.';
};
var deposit = function(amount) {
    this.balance = this.balance + amount;
    return 'Your balance is: $' + this.balance;
};



function acc(initial){
  var account = {}
  account.withdraw = withdraw;
  account.deposit = deposit;
  account.balance = initial
  account.checkBalance = checkBalance;

  return account;
}

var withdraw = function(amount){
  if(this.balance - amount >= 0){
    this.balance = this.balance - amount;
    return 'Here is your cash: $' + amount + 'your current account has ' + this.balance
  }
   return 'Insufficient funds.' + 'your current account has ' + this.balance;
}

var deposit = function(amount){
  this.balance = this.balance + amount;
  return 'Your current balance is: $' + this.balance
}

var checkBalance = function(){
  if(this.balance <= 0){
    return 'Your broke!!'
  }
  return this.balance + '$';
}


















































