"use strict";

// -----------------------------------------TASK 3------------------------------------------// 
//Замінити всі розширення файлів з .css на .js 
//const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css']; 

const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css']; 

for (let i = 0; i < files.length; i++) {
  files[i] = files[i].replace(".css", ".js");
}

console.log(files);




