// Dom manipulation

// 2nd section - styling element

const title = document.querySelector("#main-heading");

// it adds the color property as an inline style
title.style.color = "yellow";

console.log(title);

const listItems = document.querySelectorAll(".list-items");


for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = "1.5em";
}
console.log(listItems);

// 3rd section - Creating Elements
const ul = document.querySelector("ul");

const newElement = document.createElement("li")

newElement.style.fontSize = "1.5rem";

ul.append(newElement);

// 4th section - Modify text

const firstListItem = document.querySelector(".list-items");

// text only
console.log(firstListItem.innerText);

// display same as in html
console.log(firstListItem.textContent);

// display same as in html but with tags
// there are security issues regarding using innerHTML as you don't want user input to be displayed in the inner html because it allows the user to control the javascript and html on the web page 
// most cases you gonna user innerText
console.log(firstListItem.innerHTML);

newElement.innerText = "X-men";

// 5th section - modify elements attributes and classes

// how we deal with attributes [id]
newElement.setAttribute("id", "main-heading");

newElement.style.backgroundColor = "grey";

newElement.removeAttribute("id");

console.log(title.getAttribute("id"));

// how we deal with attributes [classes]

// newElement.setAttribute("class", "list-items");

newElement.classList.add("list-items");

newElement.classList.add("list-new");

newElement.classList.remove("list-new");

console.log(newElement.classList.contains("list-items"));

// Remove element

const newElement2 = document.createElement("h2");

newElement2.innerText = "Hello";

newElement2.style.color = "yellow";

newElement2.style.fontSize = "2rem";


ul.append(newElement2);

newElement2.remove();