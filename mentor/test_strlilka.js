'use strict';

const user = {
  age: 42,
  print_age: () => {
    console.log(this.age);
  },
};

user.print_age.call(user);
