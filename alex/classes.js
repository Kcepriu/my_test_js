'use strict';

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email,
// доступ до яких зроби через гетер та сетер login та email.

class User {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }

  set login(login) {
    this.#login = login;
  }
}

// ! const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// const mango = new User('Mango', 'mango@dog.woof');

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge
// console.log(mango.login); // Mangodoge

//  const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// ! Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority,
//  у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const indexNote = this.#findIndexNote(text);
    if (indexNote > -1) {
      this.items.splice(indexNote, 1);
    }
  }

  #findIndexNote(text) {
    return this.items.findIndex(item => item.text === text);
  }

  updatePriority(text, newPriority) {
    const foundObject = this.#findObject(text);
    if (foundObject) {
      foundObject.priority = newPriority;
    }
  }

  #findObject(text) {
    const indexNote = this.#findIndexNote(text);
    if (indexNote < 0) {
      return undefined;
    }
    return this.items[indexNote];
  }
}
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// ! Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false).
// За замовчуванням значення властивості on повинно бути false.

class Toggle {
  #on;
  constructor({ isOpen = true } = {}) {
    this.#on = isOpen;
  }

  get on() {
    return this.#on;
  }

  toggle() {
    this.#on = !this.#on;
  }
}

// const firstToggle = new Toggle({ isOpen: true });
// const firstToggle = new Toggle({ isOpen: false });

// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);

// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

//  Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і
// записуватиме його властивість items.

// Додай методи класу
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
// storage.addItem("🍌");
// console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// console.table(storage.getItems());
// storage.removeItem("🍋");
// storage.removeItem("😎");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌'
