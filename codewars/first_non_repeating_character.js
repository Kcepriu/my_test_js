"use strict";

function firstNonRepeatingLetter(s) {
  let checked_char = '';
  let lower_word = s.toLowerCase();

  let curent_char;
  
  for (let i = 1; i <= s.length; i++) {    
    curent_char = s[i - 1].toLowerCase();

    if (!lower_word.includes(curent_char, i) && !checked_char.includes(curent_char)) {
      // return s[i - 1];
      return i - 1;
    }

    else {
      checked_char += curent_char;
    }
  }
  // return "";  
  return 0;
}

console.log(firstNonRepeatingLetter("loveleetcode")); 
//Go hang a salami, I'm a lasagna hog!"));



