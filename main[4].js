// Event Listeners

/*
 Using onclick attribute in an inline way on the buttons

 onclick = "alert('hello')"
*/

// element.addEventListener("click", function);

const buttonTwo = document.querySelector("#btn-2");

console.log(buttonTwo);

function alertBox() {
    alert("Hello from eventListener");
}

buttonTwo.addEventListener("click", alertBox);

// MouserOver

const newBgColor = document.querySelector("#btn-3");

function changeBgcolor() {
    newBgColor.style.backgroundColor = "red";
}

newBgColor.addEventListener("mouseover", changeBgcolor);