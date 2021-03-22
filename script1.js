





/* FRIEND FACE */
/***********************************************************************
 **********************************************************************/


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* OBJECTS (BASIC SOCIAL MEDIA FUNCTIONALITY ) */
/***********************************************************************
 **********************************************************************/

/*

var database = [
  {
    username: "aleksy",
    password: "supersecret"
  }
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!"
  }
];

function isUserValid (username, password) {
    for (var i=0; i < database.length; i++) {
    if(database[i].username === username && 
      database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    document.write(newsfeed);
  } else { 
    alert("Sorry, wrong username and password");
  }
}



var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
*/

/* ARRAYS (TODO LIST) */
/***********************************************************************
 **********************************************************************/

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/* CODE DOESNT SEEM TO BE WORKING

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

*/

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//FLEXBOX




// var age = prompt("What is your age?");

// function checkDriverAge(age) {
// 	if (age > 18) {
// 		return "Powering On. Enjoy the ride!";
// 	} else if (age = 18) {
// 		return "Congratulations on your first year of driving. Enjoy the ride"
// 	} else if (age < 18) {
// 		return "Sorry, you are too yound to drive this car. Powering off";
// 	}
// }

// alert(checkDriverAge(age));