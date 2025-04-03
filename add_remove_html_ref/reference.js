// CREATE NEW HTML ELEMENTS
const newH1 = document.createElement("h1");

// ADD ATTRIBUTES/PROPERTIES
newH1.id = "newH1";
newH1.textContent = "Hello World!";

// APPEND ELEMENTS TO THE DOM
document.body.append(newH1);
// document.getElementById("box1").append(newH1);
// const box2 = document.getElementById("box2"); document.body.insertBefore(newH1, box2);

// REMOVE ELEMENTS FROM THE DOM
document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);
// const box2 = document.getElementById("box2"); box2.removeChild(newH1);

