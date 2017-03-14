/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(Number){
	Number= Number.toString();
	return n=Number;
}

var n =15;
numberToString(n);

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(bin){
	 bin++;
	 return bin;
}
 increase(n);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(bin){
	 bin--;
	 return bin;
}
 decrease(n);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
 function add(gee,ree){
 	var sum= 0;
 	sum= gee + ree;
 	return sum;

 }
 var x= 1;
 var y= 2;
add(x,y);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 function subtract(gee,ree){
 	var minus= 0;
 	minus= gee - ree;
 	return minus;

 }
 var x= 1;
 var y= 2;
subtract(x,y);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
 function multiply(gee,ree){
 	var product= 0;
 	product= gee * ree;
 	return product;

 }
 var x= 1;
 var y= 2;
multiply(x,y);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(gee,ree){
 	var division= 0;
 	division= gee / ree;
 	return division;

 }
 var x= 1;
 var y= 2;
divide(x,y);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(glee){
 	var squarie= 0;
 	squarie= glee * glee;
 	return squarie;

 }
 var x= 4;
square(x);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(x,y,z){

}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a,b){
	return a>b;
	
}
var gee= 6;
var pee= 5;
isGreaterThan(gee,pee);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){
return a<b;
}

var lee= 7;
var pee= 8;
isLessThan(lee,pee);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(lee,pee){
	if(lee===pee){
		status = true;
		return status;
	}
}

var status;
var a= 8;
var b= 8;
areEqual(a,b);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var smallest =0;
var d = 4;
var g = 6;
function minimum(pow,wow){
	if(pow>wow){
		smallest=wow;
	}else{
		smallest=pow;
	}

	return smallest;
}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var largest =0;
var d = 4;
var g = 6;
function maximum(pow,wow){
	if(pow<wow){
		largest=wow;
	}else{
		largest=pow;
	}

	return largest;
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
var eEven=0;
var n =4;
function isEven(numbah){
	if(numbah%2===0){
		eEven= true;
	}
	return eEven;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

var oOdd=0;
var n =9;
function isOdd(numbah){
	if(numbah%2===1){
		oOdd= true;
	}
	return oOdd;
}
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
var one ="all";
var two ="aboard!";
var container=0;
function combine(word1,word2){
	container = word1 +" "+ word2;
	return container;

}
combine(one,two);

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

