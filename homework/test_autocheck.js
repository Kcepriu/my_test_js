"use strict";

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
    
//     const index_elem = this.potions.indexOf(potionName);
    
//     if (index_elem === -1) {
//       return;
//     }
    
//     this.potions.splice(index_elem, 1);
  

//     // Change code above this line
//   },
// };



// atTheOldToad.removePotion("Dragon breath");

// console.log(atTheOldToad.potions);

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  indexOfName(potionName) {
    let result = -1;
    
    for (let i = 0; i < this.potions.length; i++) { 
      const { name } = this.potions[i];
      if (name === potionName) {
        result = i;
        break;
      }
    } 
    return result;
  },

  addPotion(newPotion) {    
    if (this.indexOfName(newPotion.name) >= 0 ) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const potionIndex = this.indexOfName(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },


  updatePotionName(oldName, newName) {
    const potionIndex = this.indexOfName(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName.name} is not in inventory!`;
    }

    this.potions[potionIndex].name =  newName;

    
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });

console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.getPotions());

