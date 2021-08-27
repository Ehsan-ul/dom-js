// DOM Selector: Multiple Elements

// let list = document.getElementsByClassName('sample-class');

// list[0].style.background = 'red';
// list[0].style.padding = '20px';
// list[0].textContent = 'Hello World!';

// console.log(list);

// tag dhore kaj korar jonno
// let list2 = document.getElementsByTagName('li');
// console.log(list2[0]);


let list3 = document.querySelector('ol').getElementsByTagName('li')

list3[2].style.background = 'red'
list3[1].innerHTML = '<b>GoLang</b>'

// console.log(list3)

// NOTE: forEach er khetre getElementById r getElementByClassName kaj kore na. er jonne nicer line likhte hobe

let lis = Array.from(list3)
lis.forEach((element, i) => {
  console.log(element, i)
});