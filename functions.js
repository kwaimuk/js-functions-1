/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(Number){
	Number= Number.toString();
	return n=Number;
}


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(bin){
	 bin++;
	 return bin;
}
 // 
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(bin){
	 bin--;
	 return bin;
}
 

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


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation,x,y){
var print;
var result;
if(operation==="add"){
	result= x+y;
	print= x +" + "+ y +" = "+ result;
}else if(operation==="subtract"){
	result= x-y;
	print= x +" - "+ y +" = "+ result;
}else if(operation==="multiply"){
	result= x*y;
	print= x +" * "+ y +" = "+ result;

}else if(operation==="divide"){
	result= x/y;
	print= x +" / "+ y + " = " + result;
}
console.log(print);
return result;
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



/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){
return a<b;
}



/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a,b){
	if(a===b){
		status = true;
		return true;
	}else{
		return false;
	}
	
}



/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

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

//alternatively check out switch if this no work
function letterGrade(score,total){
	var percent;
	percent=(score/total)*100;

	if(percent<100&&percent>=90){
		grade="A";
	}else if(percent<89&&percent>=80){
		grade="B";
	}else if (percent<79&&percent>= 70){
		grade="C";
	}else if (percent<70&&percent>=60){
		grade="D";
	}else {
		grade="F";
	}
	return grade;
}
	
	
	

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 function incrementReviews(restaurant){
 	if(restaurant.reviews>0){
 		restaurant.reviews++;
 	}else{
 		restaurant.reviews=1;
 	}
 	return restaurant;
 }


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


function combine(word1,word2){
	container = word1 +" "+ word2;
	return container;

}


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
 
function createCircle(number){
	var circle={};
	circle.circumference= 2 * Math.PI * number;
	circle.area= Math.PI*number*number;
	return circle;
}
