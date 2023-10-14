// Question 1 //
const containerWithoutQuerySelector = document.getElementById("container");

// Question 2 // 
const containerWithQuerySelector = document.querySelector("#container");

// Question 3 //
const secondListItems = document.querySelectorAll(".second");

// Question 4 //
const thirdListItemInOl = document.querySelector("ol .third");

// Question 5 //
containerWithoutQuerySelector.textContent = "Hello!";

// Question 6 //
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");

// Question 7 //
footerDiv.classList.remove("main");

//Question 8 //
const newLi = document.createElement("li");

//Question 9 //
newLi.textContent = "four";

// Question 10 //
const ulElement = document.querySelector("ul");
ulElement.appendChild(newLi);

// Question 11 //
const olListItems = document.querySelectorAll("ol li");
olListItems.forEach((li) => {
  li.style.backgroundColor = "green";
});

// Question 12 // 
const footerDivToRemove = document.querySelector(".footer");
footerDivToRemove.remove();
