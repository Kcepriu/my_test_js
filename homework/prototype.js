class Dish {
  const_dish = 1;
  constructor(type) {
    this.type = type;
  }

  break() {
    console.log('Break dish');
  }
}

class Food extends Dish {
  const_food = 1;
  constructor(name, type) {
    super(type);
    this.name = name;
  }
  make() {
    console.log(`I make ${this.name}`);
  }
}

food1 = new Food('soup', 'plate');

console.log(food1.__proto__ === Food.prototype);
console.log(Food.prototype.__proto__ === Dish.prototype);
console.log(Food.__proto__ === Dish);
console.log(Dish.prototype.__proto__ === Object.prototype);
console.log(Dish.__proto__ === Function.prototype);

// a = {
//   field1: 1,
// };

// b = Object.create(a);
// b.field2 = 4;
// a.field3 = 5;

// console.dir(a);
// console.dir(b);
