// Dom manipulation

// 2nd session - styling element

const title = document.querySelector("#main-heading");

// it adds the color property as an inline style
title.style.color = "yellow";

console.log(title);

const listItems = document.querySelectorAll(".list-items");


for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = "1.5em";
}
console.log(listItems);

// 3rd session - Creating Elements
const ul = document.querySelector("ul");

const newElement = document.createElement("li")

newElement.style.color = "black";

ul.append(newElement);

// 4 session - Modify text

