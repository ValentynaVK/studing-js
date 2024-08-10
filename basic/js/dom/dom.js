const sentenseRef = document.querySelector(".paragraph");
let total = 0;
const userInputRef = document.querySelector(".first-check");
const checkBoxRef = document.querySelector(".second-check");
// console.dir(checkBoxRef);

const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);
// console.log(paragraphs[0].textContent);
// console.dir([]);
const newParagraphs = [...paragraphs];
// console.log(newParagraphs);

const articleRef = document.createElement("article");
articleRef.classList.add("is-loading");

const headingRef = document.createElement("h1");
articleRef.prepend(headingRef);
console.log(articleRef);
