//1 Exercise: creatin a "home_made" html list

//Creating an array

var userNames = ["franco", "pico_de_paperis", "jack", "tom"];

//USEFUL TRICK TO PICK THE HTML BODY:
//first I created an arrow function
//then: picked up Body by TagName
//but:the results will be a HTML collection (list, not element)
//next: if body exists, pick up the first element of the list [0]
//SO: we HAVE the ACTUAL BODY stored in the variable "found"!!!

var getBody = () => {
  found = document.getElementsByTagName("body");
  if (found.length > 0) {
    return found[0];
  }
  return null;
};

//Now we use .map methods:

/*

SYNTAX:   array.map(myFunction)

-map() is a method converting an array in another array

-map() creates a new array from calling a function for every array element.

-map() calls a function once for each element in an array.

-map() does not execute the function for empty elements.

-map() does not change the original array.
*/

var arrayFromStringToHeading = (array = []) => {
  return array.map((elem, i) => {
    //Here .map behaves lik a forEach!
    var e = document.createElement("h1");
    e.innerText = i + 1 + " " + elem;
    return e;
  });
};

//This function appends each element of the array (now it is made by "h1") to the body

var addElementsToBody = (body, array = []) => {
  array.forEach((e) => {
    body.appendChild(e);
  });
};

//I assign var "addElementsToBody" to  var "doAll"
var doAll = () => {
  addElementsToBody(getBody(), arrayFromStringToHeading(userNames));
};

var button = document.getElementById("button"); //I assign the html button to "button" java variable
button.addEventListener("click", doAll); //Here I assign the function "doAll" to the button
