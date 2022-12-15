'use strict';

function cookBurger(type) {
  const result = { result: false };

  setTimeout(() => {
    if (Math.random() > 0.5) result.result = true;
  }, 2000);

  return result;
}

function order(type) {
  return new Promise(function (resolve, reject) {
    let burger = cookBurger(type);

    console.log('burger = ', burger);

    if (!burger.result) {
      return reject('Error while cooking');
    }
    return resolve(burger);
  });
}

order('type')
  .then(burger => {
    console.log('OK');
  })
  .catch(err => console.log('err'));
