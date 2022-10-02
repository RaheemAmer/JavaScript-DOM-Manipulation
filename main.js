// Dom manipulation

// getElementById()
const title = document.getElementById('main-heading');
console.log(title);

// getElementByClassName()
const listItems = document.getElementsByClassName("list-items");
console.log(listItems);
console.log(listItems[0]);

// getElementByTagName()
const tagItem = document.getElementsByTagName("li");
console.log(tagItem);
console.log(tagItem[0]);

// querySelector()
// selects first div
const container = document.querySelector("div");
console.log(container);

// querySelectorAll()

const containers = document.querySelectorAll("li");
console.log(containers);
console.log(containers[0]);