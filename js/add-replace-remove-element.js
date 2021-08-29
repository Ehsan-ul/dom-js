// create element()

let olLi = document.createElement('li');
olLi.className = 'newClass demoClass';
olLi.id = 'newId';

// Add attribute
olLi.setAttribute('href', 'https://www.google.com');
olLi.setAttribute('title', 'This is a Title');

// Add item
olLi.appendChild(document.createTextNode('PHP'));
document.querySelector('ol').appendChild(olLi);
console.log(olLi);

//
//
//
// create li and a
let ulLi = document.createElement('li');
let a = document.createElement('a');

//  set attribute
a.setAttribute('href', 'https://www.google.com');
a.setAttribute('target', '_blank');

// create text
a.appendChild(document.createTextNode('Google2'));

// append a inside li
ulLi.appendChild(a);

// append li inside ul
document.querySelector('ul').appendChild(ulLi);

console.log(ulLi);
// console.log(a)

// ======== replace
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('This is heading 1'));

let oldHeading = document.querySelector('.secondh2');

// replace >>>>>
// let parantChild = document.querySelector('.container');
// parantChild.replaceChild(newHeading, oldHeading);
// or >>
document.querySelector('.container').replaceChild(newHeading, oldHeading);

console.log(newHeading, oldHeading);

// ======== remove
// way 1
var olItem = document.querySelectorAll('ol li');
olItem[1].remove();

// way2
var ol = document.querySelector('ol');
var liItem = document.querySelectorAll('li');

ol.removeChild(liItem[0]);

// class add
ol.className = 'test-class'; // className ager class gulo k remove kore dey notun vabe class naming kore
ol.classList.add('test-class2'); // classList remove na kore class name add kore dey

// class remove
ol.classList.remove('test-class');

ol.setAttribute('class', 'myClass');

console.log(ol);

// attribute
let check = ol.hasAttribute('class');

console.log(check);
