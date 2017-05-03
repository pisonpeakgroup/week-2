//function to display date and time
function displayCurrentDayAndTime(){
var currentDateTime = new Date();
return console.log(currentDateTime.toString());
}
displayCurrentDayAndTime();


//function to calculate parameters of a triangle
function findAreaAndParameterOfTriangle(side1, side2, side3){
var parameter = side1 + side2 + side3;
return console.log(parameter);
}
findAreaAndParameterOfTriangle(34,30,26);


//function to reverse a string using in-built functions
function reverseStringGiven(CALABAR){
var splitString = CALABAR.split('');
var reverseString = splitString.reverse();
var joinString = reverseString.join();
return console.log(joinString);
}
reverseStringGiven('CALABAR');


//function to reverse a string using Single for-loop declaration with concatenation
function reverseStringGiven(CALABAR){
for (var i = CALABAR.length - 1, o = ''; i >= 0; o += CALABAR[i--]) { }
  return o;
}
reverseStringGiven('CALABAR');



//
1. function Declaration and attach an Object
2. var  declaration
3. return command
4. create a Callback/Attach a String.


or

START
1. Function Deleration
2. Var/Parameters Decleration
3. Body Code
4. return Statement
5. Attach a global object/Built-in Object/callabck
END
//
