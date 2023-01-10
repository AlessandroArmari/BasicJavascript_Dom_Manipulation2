// Exercise 1: creatin a "home_made" html list

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

//EXERCISE 2---> print html window dimension as soon as they change

var dim = document.getElementById("dim");

//everyTime I change windows dimensions (like: onclick!)
window.onresize = (event) => {
  //event.target--->returns: the object on wich the event occur
  var width = event.target.innerWidth;
  var height = event.target.innerHeight;

  //I could've typed:
  //var width = window.innerWidth;
  //var height = windows.innerHeight;
  //...and it would've worked as well!

  //here I change the html
  dim.innerHTML = width + "px" + ", " + height + "px";

  //here I print dimensions on console
  console.log(width, height);
};

//EXERCISE 3

const users = [
  {
    id: 1,
    name: "Federico",
    surname: "Tarascio",
    indirizzo: {
      via: "Via Roma",
      civico: 1,
    },
  },
  {
    id: 2,
    name: "Mario",
    surname: "Rossi",
    indirizzo: {
      via: "Via Roma",
      civico: 1,
    },
  },
  {
    id: 3,
    name: "Luca",
    surname: "Verdi",
    indirizzo: {
      via: "Via Roma",
      civico: 1,
    },
  },
];

const fromUserArrayToElement = (users = []) => {
  return users.map((user) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    // in -> RETURNS TRUE IF KEY EXISTS, OTHERWISE FALSE
    if ("name" in user && "surname" in user) {
      h1.innerText = user.name + " " + user.surname;
    }

    const h3 = document.createElement("h3");
    h3.innerText = user.indirizzo.via + ", " + user.indirizzo.civico;

    div.append(h1, h3);
    div.style.backgroundColor = "red";
    return div;
  });
};

const elements = fromUserArrayToElement(users); //the function returns a div

const body = getBody();

//We use the previous crafted method to append children to the body
addElementsToBody(body, elements); //attacching the div to the body
