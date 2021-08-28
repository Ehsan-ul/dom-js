let val;

let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');

val = list;
val = list.childNodes;

console.log(val);
console.log(val[0]);
console.log(val[1].nodeName);

// nodeType:
// 1 Element
// 2 Attribute
// 3 Text
// 8 Comment
// 9 Document itSelf
// 10 Doctype
console.log(val[3].nodeType);

// children
val = list.children;
// val = list.children[1]
// val = list.children[2]
console.log(val);
console.log(val[2]);
console.log(val[3]);

val[1].textContent = 'মেইনলি কোডিং';
// or
list.children[2].textContent = 'লিংডইন';

// children er vetor children dhora
list.children[3].children[0].textContent = 'গিটহাব';
list.children[3].children[0].innerHTML = '<b>গিটহাব</b>';
list.children[3].children[0].style.background = 'blue';

// how to see attribute
console.log(val[3].children[0].href);
console.log(val[3].children[0].target);

// child dhora
console.log(list.firstChild);
console.log(list.firstElementChild);

console.log(list.childElementCount);

// parant element
console.log(list.parentElement);
console.log(listItem.parentElement);
console.log(listItem.parentNode);
console.log(listItem.parentNode.parentNode);
console.log(listItem.parentNode.parentNode.parentNode);
console.log(listItem.parentNode.parentNode.parentNode.parentNode.parentNode);

// siblings
let listItem2 = document.querySelector('ul li:nth-child(2)');
console.log(listItem2.nextSibling);
console.log(listItem2.nextSibling.nextSibling);
console.log(listItem2.nextElementSibling);

console.log(listItem2.previousSibling);
console.log(listItem2.previousElementSibling);
