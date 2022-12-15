// function Person(name, age, sex) {
//   this.name = name;
//   this.age = age;
//   this.sex = sex;
// }

// const rand = new Person("Rand McKinnon", 33, "M");
// const ken  = new Person("Ken Jones", 39, "M");


// Person.prototype.test2 = "yes";

// console.log(rand.test2);
// console.log(ken.test2);

// ken.test2 = "no";

// console.log(rand.test2);
// console.log(ken.test2);


// function Person() {
// }

// const rand = new Person();
// const ken  = new Person();


// Person.prototype.test2 = [1, 2];

// console.log(rand.test2);
// console.log(ken.test2);

// ken.test2 = [3, 3];

// console.log(rand.test2);
// console.log(ken.test2);

const User = function ({ email, password } = {}) { 
  this.email = email;
  this.password = password;

  funct1 = function (d) { 
    console.log("test123");    
  }
}

User.ddd = "sss";
User.func2 = function () { return "new function " };

const userOne = new User("Serhii", "123456");

console.log(User);
console.log('userOne ', userOne);
console.log(userOne.funct1());
console.log(userOne.funct2());

console.log(User.dir);
console.dir(User);


