let val;
val = this;
val = window;
val = window.document;
val = document;

val = document.all;
val = document.all[20];
val = document.all.length;

val = document.head;
val = document.body;

val = document.doctype;

val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.links;
val = document.links[0];
val = document.links[0].href;

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

console.log(val);
