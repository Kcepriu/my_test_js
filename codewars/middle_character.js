// Find the middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word's length is odd - return the middle character. If the word's length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: "Invalid value".
// For user input use "prompt" function. For displaying results, use the "alert" function.
// Find the middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word's length is odd - return the middle character. If the word's length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: "Invalid value".
// For user input use "prompt" function. For displaying results, use the "alert" function.

"use strict";

function middle_character(word) { 
  if (!word || !word.replaceAll(" ", '')) {
    return '';
  }

  const len = word.length;
  const isEven = (len % 2 === 0);

  let start_index = Math.floor(len / 2)-1 + ((isEven) ? 0: 1);
  
  return word.slice(start_index, start_index + ((isEven) ? 2: 1));
} 

const word = prompt();
const result = middle_character(word);

if (result) { 
  alert(result);
}
else { 
  alert("Invalid value");
}
