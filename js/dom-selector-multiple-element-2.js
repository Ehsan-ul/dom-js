/*
document.querySelectorAll()
how to use:
id- #
class- .
tag- none
*/

let val = document.querySelectorAll('.sample-class');

val[0].style.background = 'green';
val[1].style.background = 'grey';

let valLi = document.querySelectorAll('ol li');
// console.log(valLi)

// forEach()
valLi.forEach((item, i) => {
  console.log(item, i);
});

// odd even
let oddLi = document.querySelectorAll('ol li:nth-child(odd)');
oddLi.forEach((item) => {
  item.style.background = 'yellow';
});

let evenLi = document.querySelectorAll('ol li:nth-child(even)');
evenLi.forEach((item) => {
  item.style.background = 'skyblue';
});

console.log(oddLi);
