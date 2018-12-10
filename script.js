// Create ctn
let ctn = document.createElement("div");
document.body.appendChild(ctn);
let ctn2 = document.createElement("div");
document.body.appendChild(ctn2);
ctn2.style.display = "none";


// Create input paragraph and label name and fisrt name

let paraNameFirstName = document.createElement("p");
let firstName = document.createElement("label");
let lastName = document.createElement("label");
let inputFirstName = document.createElement("input");
let inputLastName = document.createElement("input");

//personaliz input and label
firstName.textContent = "Quel est votre nom ?";
lastName.textContent = "Quel est votre prenom ?";

inputFirstName.setAttribute("type", "text");
inputFirstName.setAttribute("name", "firstName");
inputFirstName.setAttribute("id", "inputFirstName");

inputLastName.setAttribute("type", "text");
inputLastName.setAttribute("name", "lastName");
inputLastName.setAttribute("id", "inputLastName");

//label hello sentence and et pick up of names with ID // Not working

let labelHello = document.createElement("label");
labelHello.textContent = ("Bonjour!")
let paraHello = document.createElement("p");



//create button
let btnOkCtn = document.createElement("input");
btnOkCtn.type = "button";
btnOkCtn.value = "Ok"

//create label erreur
let labelError = document.createElement("label");
labelError.textContent = "Veuillez remplir tout les champs"
labelError.style.color = "red";
labelError.style.display = "none";

// Add to ctn
ctn.appendChild(paraNameFirstName);
paraNameFirstName.appendChild(firstName);
paraNameFirstName.appendChild(inputFirstName);
paraNameFirstName.appendChild(document.createElement("br"))
paraNameFirstName.appendChild(lastName);
paraNameFirstName.appendChild(inputLastName);
paraNameFirstName.appendChild(document.createElement("br"))
paraNameFirstName.appendChild(document.createElement("br"))
paraNameFirstName.appendChild(btnOkCtn);
paraNameFirstName.appendChild(document.createElement("br"))
paraNameFirstName.appendChild(labelError)
//function btn ok

btnOkCtn.addEventListener("click", btnRequired, false);

function btnRequired() {
  if ((inputFirstName.value == "") && (inputLastName.value == "")) {
    labelError.style.display = "block";
  } else {
    ctn.style.display = "none";
    ctn2.style.display = "block";
    let idNom = document.getElementById(inputFirstName).value
    idNom.appendChild(paraHello);
  }
}

// create paragraph salary
let paraSalary = document.createElement("p");

//create labels salary
let labelSalaryMonthBrut = document.createElement("label");
let labelSalaryMonthNet = document.createElement("label");
let labelSalaryYearBrut = document.createElement("label");
let labelSalaryYearNet = document.createElement("label");
labelSalaryMonthBrut.textContent = "Salaire mensuel brut";
labelSalaryMonthNet.textContent = "Salaire mensuel net";
labelSalaryYearBrut.textContent = "Salaire annuel brut";
labelSalaryYearNet.textContent = "Salaire annuel net";

//create inputnumber
let inputSalaryMonthBrut = document.createElement("input");
let inputSalaryMonthNet = document.createElement("input");
let inputSalaryYearBrut = document.createElement("input");
let inputSalaryYearNet = document.createElement("input");

// add input and label
ctn2.appendChild(paraSalary);
paraSalary.appendChild(labelSalaryMonthBrut)
paraSalary.appendChild(inputSalaryMonthBrut)
paraSalary.appendChild(document.createElement("br"))

paraSalary.appendChild(labelSalaryMonthNet)
paraSalary.appendChild(inputSalaryMonthNet)
paraSalary.appendChild(document.createElement("br"))

paraSalary.appendChild(labelSalaryYearBrut)
paraSalary.appendChild(inputSalaryYearBrut)
paraSalary.appendChild(document.createElement("br"))

paraSalary.appendChild(labelSalaryYearNet)
paraSalary.appendChild(inputSalaryYearNet)





// pick up words who has conjonction
let paraArray = document.createElement("p");
ctn2.appendChild(paraArray)
let arrayConjonction = ["je", "pense", "donc", "je", "suis", "or", "mais", "ou", "est", "donc"];

function arrayPairOrNot(seq) {
  let i = 0;
  let currentElement;
  while (i < seq.length) {
    currentElement = seq[i]
    i = i + 1;
    if (i == "donc" || i == "mais" || i == "or");
    paraArray.appendChild(currentElement);
  }
};


// Create array with pair numbers

let arrayNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function arrayPairOrNot(seq) {
  let i = 0;
  let currentElement;
  while (i < seq.length) {
    currentElement = seq[i]
    i = i + 1;
    if (i % 2 == 0)
      ctn2.appendChild(arrayNumb);
  }
}

//Create random array
let paraRandomArray = document.createElement("p");
ctn2.appendChild(paraRandomArray);
let randomNumber = arrayNumb[Math.floor(Math.random() * arrayNumb.length)];
