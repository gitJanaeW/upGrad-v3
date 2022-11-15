//let cardDeck = document.querySelector(".card-deck")
const query = {};

var dropDownInstu = document.querySelector("#show-filter");
var dropDownSubject = document.querySelector("#dept");
var dropDownCollab = document.querySelector("#collab");

function selectedInstu() {
  dropDownInstu.className = "d-block";
}

function selectedDept() {
  var dept = document.getElementById("dept").value;
  document.getElementById("demo-2").innerHTML = "You selected: " + dept;
}

function selectedCollab() {
  var dept = document.getElementById("collab").value;
  document.getElementById("demo-3").innerHTML = "You selected: " + dept;
}


document.querySelector("#filter-btn").addEventListener("click", selectedInstu);

