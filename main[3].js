// Dom manipulation

// Traverse the DOM

// Parent Node Traversal
console.log("____________");

let element = document.querySelector("ul");

console.log(element);

// get the parent element
console.log(element.parentElement);

// get the grandparent element
console.log(element.parentElement.parentElement);

// get the parent node
console.log(element.parentNode);

// get the grandparent node
console.log(element.parentNode.parentNode);

const htmlElement = document.documentElement;

console.log(htmlElement.parentNode);
console.log(htmlElement.parentElement)

// Child Node Traversal
console.log("____________");

let newElement = document.querySelector("ul");

console.log(newElement.childNodes);
console.log(newElement.childNodes[0]);
console.log(newElement.childElementCount);
console.log(newElement.firstChild);
console.log(newElement.lastChild);

newElement.childNodes[1].style.color = "red";

console.log(newElement.children);
console.log(newElement.firstElementChild);
console.log(newElement.lastElementChild);

// Sibling Node Traversal
// element that are on the same level like h1, hr and ul
console.log("____________");


const newestElement = document.querySelector("ul");

const divElement = document.querySelector("div");

console.log(divElement.children);

console.log(newestElement.previousSibling);
console.log(newestElement.previousElementSibling);
console.log(newestElement.nextSibling);
console.log(newestElement.nextElementSibling);

