'use strict';

class Tree {
  #root;

  constructor() {
    this.#root = undefined;
  }

  getNewElement(value) {
    return {
      leftElement: undefined,
      rightElement: undefined,
      countLeft: 0,
      value: value,
    };
  }

  addElem(value) {
    let countLeft = 0;

    if (!this.#root) {
      this.#root = this.getNewElement(value);
      return countLeft;
    }

    let nextElement = undefined;
    let toRigth = false;

    let curentElem = this.#root;

    while (curentElem) {
      if (value > curentElem.value) {
        nextElement = curentElem.rightElement;
        toRigth = true;
        countLeft += curentElem.countLeft + 1;
      } else {
        nextElement = curentElem.leftElement;
        toRigth = false;
        curentElem.countLeft++;
      }

      if (nextElement) {
        curentElem = nextElement;
        continue;
      }

      const newElement = this.getNewElement(value);

      if (toRigth) {
        curentElem.rightElement = newElement;
      } else {
        curentElem.leftElement = newElement;
      }

      break;
    }

    return countLeft;
  }
}

function smaller(arr) {
  const result = [];
  const tree = new Tree();

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = tree.addElem(arr[i]);
  }
  return result;
}

console.log(smaller([0, -1, -2, 0]), [2, 1, 1, 0]);

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);

// console.log([1, 1, 0]);
console.log(smaller([1, 2, 3]));
