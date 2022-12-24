'use strict';

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product) - колбек, що приймає об"єкт продукта та виводить його у консоль

// function showProduct(product) {
//   console.log(product);
// }

// function makeProduct(name, price, callback) {
//   const article = {
//     id: Date.now(),
//     name,
//     price,
//   };

//   callback(article);
// }

// makeProduct('TV', 300, showProduct);

// Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
// яка пам"ятає ім"я шефа під час свого виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie');
// makeDish('Poly', 'muffins');

// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// product.showPrice();

// Напишіть функцію makeCounter, яка повертає іншу функцію,
// яка рахує та виводить у консоль кількість своїх викликів

// Напишіть функцію makeCounter, яка повертає іншу функцію,
// яка рахує та виводить у консоль кількість своїх викликів

// function makeCounter() {
//   let count = 0;
//   return function newFunction() {
//     count += 1;
//     console.log('🚀 ~ count', count);
//   };
// }

// const fn = makeCounter();

// fn();
// fn();
// fn();
// fn();
// fn();

// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
// яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
// та false - якщо не співпадає

// Напишіть функцію для зберігання знижки.
// Функція повертає іншу функцію, яка приймає суму покупки
// та повертає фінальну суму зі збереженою знижкою

// Напиши функцію конструктор User для створення користувача із наступними властивостями
// userName - ім"я, рядок
// age - вік, число
// numbersOfPost - кількість постів, число
// Очікує один параметр - об"єкт налаштувань із одноіменними властивостями

// Додай метод getInfo(), який повертає рядок
// `Користувачу ${ім"я} ${вік} років і у нього ${кількість публікацій} публікацій.`

function User(value) {
  const { userName, age, numbersOfPost } = value;
  this.userName = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;

  this.getInfo = function () {
    return `Користувачу ${this.userName} ${this.age} років і у нього ${this.numbersOfPost} публікацій.`;
  };
}

const user = new User({ userName: 'alex', age: 20, numbersOfPost: 55 });
console.log(user.getInfo());
