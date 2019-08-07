/*
  What is JavaScript?
  - JavaScript is not Java
  - JavaScript == ECMAScript
   European Computer Manufacturers Association (ECMA)
   The organization was founded in 1961 to standardize computer systems in Europe.
    ECMAScript is commonly used for client-side scripting on the World Wide Web
  - Programming language of the web
  - Commonly used for Front-end development (what happens on the browser)
  - Creates interactions
  - Servers side (Back-end Development)
*/
/*
  JavaScript Jargon
  Data Types are:
  - Numbers
  - Strings (Variables x=3)
  - Boolean (== ===)
  - Object ({})
  - Arrays ([])
  - Operators (+ = == !=)
  - Function:
  function functionName(arguments) {}
  - Control Structure:
    if (true) {}
    if (true) {} else {}
    switch (expression) {
    case expression:
      break;
    default:
  })
  Loops:
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  while (true) {}

  DOM (Document Object Model)
  - To access the outline of the page. Collects all the elements writen in the HTML.
  Provides methods and properties of each elements (id, class, tagnames)
  - document.getElementById('id')
  - document.querySelector('.myclassname')
  - document.querySelectorAll('div > p')
  Properties:
  value, checked, classname, id
*/

/*  Immediately-Invoked Function Expression, or IIFE for short.
    Executes after the document loads (ready)
*/
(function() {
  "use strict";
  /*
    "use strict"; Defines that JavaScript code should be executed in "strict mode".
    Not required but learn more at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  */

  /* Lets add an event listener for when the page loads
  by adding DOMContentLoaded
  */
  window.addEventListener('DOMContentLoaded', (event) => {
    console.log('window.addEventListener', window.addEventListener);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var year = 2018; // hard-coded
    /* Using the new Date() function
    new is a keyword which is required for Date
    https://www.w3schools.com/js/js_date_methods.asp
    */
    var d = new Date();
    console.log('d', d);
    var currentYear = d.getFullYear(); // dynamic data

    console.log('DOMContentLoaded innerHTML', document.querySelector('.footer'));
    console.log('DOMContentLoaded textContent', document.querySelector('.footer').textContent);
    /* Add copyright year */
    var classYearElement = document.querySelector('footer .year');
    //classYearElement.innerHTML = year;
    classYearElement.innerHTML = currentYear;

    /* Listen for onclick action **/
    document.querySelector('.downloadresume').onclick = downloadResumeClick;
  });

  function downloadResumeClick() {
    var answer = window.confirm("Click Ok, to download resume. Click Cancel, to visit LinkedIn Profile.");
    answer;

    console.log("click answer: ", answer);
    // If Else statment
    if (answer === true) {
    console.log("You clicked Ok.");
    } else {
      console.log("You clicked Cancel.");
      window.location.href = 'https://www.linkedin.com/';
    }
  }


/*
Assigning a variable to store strings and integer:
Create a variable called cityName and assign the value New York to it.
*/
var city;
var cityFrom = "";
var cityName = "New York City";
var x = 10;

console.log("cityName, x: ", cityName, x);
var firstname = "Judi", lastname = "Desire", occupation = "Web Developer";
console.log("firstname, lastname, occupation: ", firstname, lastname, occupation);

var num = 2019;
var numString = "2019";
console.log("x + num = ", (x+num)); // x + num =  – 2051
console.log("x + numString = ", (x+numString)); // x + numString =  – "322019"

var escapequotes = "This is Judi's \"city\" name";
console.log ("escapequotes: ", escapequotes);

/*
	String properties and methods
*/
var myString = "This is my string.";
var stringLength = myString.length;
console.log("stringLength: ", stringLength);
var convertoUpperCase = myString.toUpperCase();
console.log("convertoUpperCase: ", convertoUpperCase, myString.toUpperCase);

/*
Number
	JavaScript has only one type of number. Numbers can be written with or without decimals.
*/
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
console.log("x + y = ", (x+y), x); // 6.140000000000001 – 3.14

var x1 = 123e5;    // 12300000
var y2 = 123e-5;   // 0.00123

var a = 0.2 + 0.1;         // x will be 0.30000000000000004
var d = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

/*
Math
	The JavaScript Math object allows you to perform mathematical tasks on numbers.
*/
var xy = (x+y);
var m = Math.round(xy);
console.log("m: ", m);

var show_random_num = Math.random();
console.log("show_random_num: ", show_random_num);

/* Boolen */
console.log("cityName: ", Boolean(cityName), cityName);
console.log("city: ", Boolean(city), city);
var x = null;
console.log("x: ", Boolean(x));

console.log("City From: ", cityFrom, Boolean(cityFrom));
cityFrom = "Brooklyn"
console.log("City From: ", cityFrom, Boolean(cityFrom));

/* Objects */
var myObj = {}
console.log(myObj)
var myObj = {
	"state": "New York",
	"zipcode": 10027
}
console.log("object: ",myObj, myObj.zipcode)

/* Arrays are used for list; JS doesn't care the type of data in the list*/

var myArray = new Array; //var myArray = new Array();
console.log(myArray);
myArray = [0, 1, 2, 'string1', 'string2', 'string3', true, false];
console.log(myArray, myArray[2]);

var daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daysoftheweek, daysoftheweek[0]);
var d = new Date();
console.log("date: ", d)
var getWeekDay = d.getDay();
console.log("daysoftheweek", daysoftheweek[getWeekDay], "getWeekDay", getWeekDay);

var arrayofStuff = [
	{'name': 'Judi'},
	[3,4,5],
	'nifty'
]
console.log("arrayofStuff", arrayofStuff.length);

var nycBoroughs = [
	'Manhattan',
	'Brooklyn',
	'Queens',
	'Bronx',
	'Staten Island'
];
console.log('nycBoroughs: ', nycBoroughs, nycBoroughs[3])
nycBoroughs[3] = "The Bronx"
console.log('boroughs: ', nycBoroughs, nycBoroughs[3])
/*
	Pushing list items to the end of an array
*/
nycBoroughs[nycBoroughs.length] = "Westchester";
console.log('extra boroughs: ', nycBoroughs);
nycBoroughs.push("Yonkers");
console.log('push boroughs: ', nycBoroughs);

// Removing last item from the arrary
nycBoroughs.pop();
console.log('pop boroughs: ', nycBoroughs);
console.log('what pop? ', nycBoroughs.pop());

//shift(): Remove an item from the beginning of an array
nycBoroughs.shift();
console.log('shift boroughs: ', nycBoroughs);

//unshift(): Add items to the beginning of an array
nycBoroughs.unshift('Long Island');
nycBoroughs.unshift('Hudson Valley', 'Albany');
console.log('unshift boroughs: ', nycBoroughs);
console.log('unshift() returns length: ', nycBoroughs.unshift()); //unshift() returns the new array length.

//Splice (where you want to start, how many to remove)
nycBoroughs.splice(2, 2)
console.log('splice boroughs: ', nycBoroughs)

//Using a Strict
var one = 1, two = 2;
console.log('one === one', one === one);
console.log('one == one', one == one);
console.log('one === two', one === two);
console.log('one !== two', one !== two);
//Using a non-Strict
one = "1";
console.log('one == one', one == one);
console.log('one === one', one === one);
console.log('one != one', one != one);

console.log('one < two', one < two);
console.log('one > two', one > two);
console.log('one <= two', one <= two);
console.log('one >= two', one >= two);

var animal1 = "cow";
var animal2 = "bear";
var animal3 = "tiger";
var animal4 = "lion";
// And
console.log('animal &&', animal1 === "cow" && animal2 === "bear");
// Or
console.log('one || two', one || two);
console.log('animal1 || animal2', animal1 === "cow" || animal2 === "lion");
console.log('animal1 || animal3', animal1 === "bear" || animal3 === "lion");
console.log('animal1 || animal3 && animal2', animal1 === "bear" || animal3 === "lion" && animal2 === "bear");
console.log('(animal1 || animal3) && animal2', (animal1 === "bear" || animal3 === "lion") && animal2 === "bear");

// Nor or Bang
console.log("not true", !true);
console.log("not false", !false);
console.log('not animal1 || animal2', !(animal1 === "cow" || animal2 === "bear"));

// If statements
/*
	Conpare the difference between alert and window confirm.
	window.confirm()
	alert()
*/

// Uncomment the below section to see in action

/*
  var answer = window.confirm("Click Ok, get true. Click Cancel, get false.");
  answer;

  alert('alert box');

  console.log("click answer: ", answer)
  if (answer === true) {
  	console.log("You clicked Ok.");
  }

// If Else statment
if (answer === true) {
	console.log("You clicked Ok.");
} else {
	console.log("You clicked Cancel.");
}
*/

// Uncomment the below section to see it in action
/*
var answer = window.prompt("Type YES, NO, MAYBE. Then click Ok");
if (answer === 'YES') {
	console.log("You wrote YES.");
}
else if(answer === 'MAYBE') {
	console.log("You wrote Maybe.");
}
else if(answer === 'NO') {
	console.log("You wrote NO.");
}
else {
	console.log('else answer', answer)
	//console.log('Boolean(answer.length)	answer.length 	answer', Boolean(answer.length), answer.length, answer);
	// Boolean(answer.length)	answer.length 	answer
	if (answer) {
		console.log("Your wrote: ", answer);
	} else {
		console.log("Empty");
	}
}
*/

/*
	Switch Statement
	The switch statement is used to perform different actions based on different conditions.
	https://www.w3schools.com/js/js_switch.asp
		switch(expression) {
			case x:
				// code block
				break;
			case y:
				// code block
				break;
			default:
				// code block
		}
*/
// Uncomment to see switch in action
/*
switch(answer) {
  case "YES":
    // code block
    console.log("You wrote YES.");
    break;
  case "MAYBE":
    // code block
    console.log("You wrote MAYBE.");
    break;
  case "NO":
    // code block
    console.log("You wrote NO.");
    break;
  default:
    // code block
    console.log("Your wrote: ", answer);
}
*/

//	What happens when you don't include a break?

//One line If statement
var fname = "FirstName"
if (fname === "FirstName") console.log("first name", fname);

var transportation = "bicycle", birthdayGift = "bicycle", iGot = false;
//birthdayGift = "metrocard"
if( transportation === birthdayGift) {
	console.log("YAY!")
	iGot = false;
} else {
	console.log('Oh no! I need to give more hints.');
	iGot = true;
}
if (iGot){ console.log("Cry, WAAAAAA!") }
if (!iGot){ console.log("Scream, WEEEEE!") }

/*
	Terse ifs are condition statements
	? is true
	: is false
	https://stackoverflow.com/questions/29043135/javascript-one-line-if-else-else-if-statement/34860002
*/
var transport = "bicycle";
//var transport = "subway";
transport === "bicycle"
	? console.log("Your transport is bicycle")
	: console.log("Your transport is subway")
//Why we don't use semicolon?

// Ternary (conditional) operator setting a variable
var transportType = transport === "bicycle" ? "type bicycle" : "type subway";
console.log("transportType", transportType)
//readability
var transportType = (transport === "bicycle") ? "type bicycle" : "type subway";

// Type checking
var thing = 12;
console.log('typeof', typeof thing);
var thing = "twelve";
console.log('typeof', typeof thing);
var thing = false;
console.log('typeof', typeof thing);
var thing = {};
console.log('typeof', typeof thing);
var thing = [];
console.log('typeof', typeof thing);

// For loops: Sequential
var i = 0; //set interger index
console.log("i, daysoftheweek, daysoftheweek.length", i, daysoftheweek, daysoftheweek.length)
// ( index; when to stop; increments)
for ( i; i < daysoftheweek.length; i++) {
	daysoftheweek[i];
	console.log('daysoftheweek[i]', daysoftheweek[i])
}

})(); // the end!
