//  DOM Selector (Single Element)

let val;

// getting an element
// val = document.getElementById('document-title');
// val = document.getElementById('document-title').id;
// val = document.getElementById('document-title').className;
// console.log(val);

// changing the style
// val = document.getElementById('document-title').style.background = 'grey';
// val = document.getElementById('document-title').style.color = '#ffffff';
// val = document.getElementById('document-title').style.padding = '20px';
// val = document.getElementById('document-title').style.fontSize = '40px';
// // val = document.getElementById('document-title').style.display = 'none';
// val = document.getElementById('document-title').style.display = 'block';
// val = document.getElementById('document-title').style.marginTop = '40px';

// // changing content
// val = document.getElementById('document-title').textContent =
//   'New Programming language';
// val = document.getElementById('document-title').innerText =
//   'New List of Programming language';
// val = document.getElementById('document-title').innerHTML =
//   '<i> Another Heading </i>';

// another shotcut
// let val2 = document.getElementById('document-title');
// val2.style.background = 'red';
// val2.innerHTML = '<h3>ShotCut declaration</h3>'

// document.querySelector
let myStyle;
// myStyle = document.querySelector('#document-title');
// myStyle.style.background = 'lightGreen';
// myStyle.style.color = 'blue'
// myStyle.style.padding = '20px'

myStyle = document.querySelector('ol');
myStyle.style.color = '#ddd';
myStyle.style.background = '#377dff';
myStyle.style.padding = '20px';

// console.log(myStyle);

// li dhora
// let myLi = document.querySelector('ul li:last-child');
// let myLi = document.querySelector('ul li:nth-child(2)');
let myLi = document.querySelector('#myList li:nth-child(3)');
myLi.style.background = 'brown';
myLi.innerText = 'লিংকডইন';

// console.log(myLi);

// class dhora
let classVal = document.querySelector('.title');
classVal.style.background = '#ddd';
classVal.style.padding = '20px'

