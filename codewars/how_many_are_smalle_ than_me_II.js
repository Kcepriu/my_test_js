'use strict';

function smaller_1(arr) {
  const arrayResult = [];

  for (let i = 0; i < arr.length; i++) {
    arrayResult.push(
      arr
        .slice(i + 1)
        .reduce((total, elem) => total + (elem < arr[i] ? 1 : 0), 0),
    );
  }

  return arrayResult;
}

// ************************************** */

class Tree {
  #tree;

  getTree() {
    return this.#tree;
  }

  getNewElement(value) {
    return {
      leftIndex: undefined,
      rightIndex: undefined,
      value: value,
    };
  }

  getCountElement() {
    return this.#tree.length;
  }
  constructor() {
    this.#tree = [];
  }

  addElem(value) {
    const newElement = this.getNewElement(value);

    let firstNextElement;

    if (!this.#tree[0]) {
      this.#tree[0] = newElement;

      return firstNextElement;
    }

    let nextIndex = 0;
    let curentElem = this.#tree[nextIndex];

    while (curentElem) {
      // console.log(1, curentElem.value, value, firstNextElement);
      if (firstNextElement === undefined && curentElem.value > value) {
        firstNextElement = curentElem.value;
      } else if (
        curentElem.value > value &&
        curentElem.value < firstNextElement
      ) {
        firstNextElement = curentElem.value;
      }

      if (curentElem.value < value) {
        nextIndex = curentElem.rightIndex;
      } else {
        nextIndex = curentElem.leftIndex;
      }

      if (nextIndex) {
        curentElem = this.#tree[nextIndex];
        continue;
      }

      nextIndex = this.#tree.push(newElement) - 1;

      if (curentElem.value < value) {
        curentElem.rightIndex = nextIndex;
      } else {
        curentElem.leftIndex = nextIndex;
      }

      break;
    }

    return firstNextElement;
  }
}

class BinaryTree {
  #tree;
  #workArray;
  #countArray;

  #startList;
  #endList;

  getNewElement() {
    return {
      prevIndex: undefined,
      nextIndex: undefined,
      arrayCurentIndex: [],
    };
  }

  constructor(arr) {
    this.incomingArray = arr;

    this.#workArray = [];

    this.#workArray[0] = []; // Positive index
    this.#workArray[1] = []; // Negative index

    this.#startList = undefined;
    this.#endList = undefined;

    this.#countArray = [];

    this.#tree = new Tree();
  } //constructor

  startWork() {
    let curentElem;

    for (let i = 0; i < this.incomingArray.length; i++) {
      this.#countArray[i] = 0;

      curentElem = this.addElement(this.incomingArray[i], i);

      //Збільшити на 1 кількість в усіх "старших" елементах
      this.increaseLargerItems(curentElem);
    }

    return this.#countArray;
  } //startWork

  addElement(num, index) {
    let elem = this.getElement(num);

    if (!elem) {
      elem = this.getNewElement();
      this.setElement(num, elem);
      this.changePrevNext(num, elem);
    }

    elem.arrayCurentIndex.push(index);

    return elem;
  } //addElement

  increaseLargerItems(element) {
    let nextElement = this.getNextElement(element);

    let i = 0;
    while (nextElement) {
      for (const index of nextElement.arrayCurentIndex) {
        this.#countArray[index]++;
      }
      nextElement = this.getNextElement(nextElement);
    }
  } //increaseLargerItems

  getNextElement(element) {
    if (element.nextIndex !== undefined) {
      return this.getElement(element.nextIndex);
    }
    return undefined;
  } //getPrevElement

  getElement(num) {
    return num >= 0 ? this.#workArray[0][num] : this.#workArray[1][-num];
  } //getElement

  setElement(num, element) {
    if (num >= 0) {
      this.#workArray[0][num] = element;
    } else {
      this.#workArray[1][-num] = element;
    }
  } //setElement

  changePrevNext(num, elem) {
    //Додамо в дерево новий елемент
    const indexFirstNextElement = this.#tree.addElem(num);

    if (this.#tree.getCountElement() === 1) {
      // console.log('//Додамо в дерево перший елемент');
      //Додамо в дерево новий елемент

      this.#addFirstElementToList(num);
    } else if (num < this.#startList) {
      // console.log('//Додаємо на початок списку');
      //Додаємо на початок списку
      this.#addToStartList(elem, num);
    } else if (num > this.#endList) {
      // console.log('//Додаємо в кінець списку');
      //Додаємо в кінець списку
      this.#addToEndList(elem, num);
    } else {
      // console.log('//Додаємо в середину списку');
      //Додаємо в середину списку
      this.#addElementIntoList(elem, num, indexFirstNextElement);
    }
  } //changePrevNext

  #addToStartList(elem, num) {
    elem.nextIndex = this.#startList;

    const minElem = this.getElement(this.#startList);
    minElem.prevIndex = num;
    this.#startList = num;
  }

  #addToEndList(elem, num) {
    elem.prevIndex = this.#endList;

    const maxElem = this.getElement(this.#endList);
    maxElem.nextIndex = num;
    this.#endList = num;
  }

  #addFirstElementToList(num) {
    this.#startList = num;
    this.#endList = num;
  }

  #addElementIntoList(elem, num, indexFirstNextElement) {
    const firstNextElement = this.getElement(indexFirstNextElement);
    const firstPrevElement = this.getElement(firstNextElement.prevIndex);

    elem.nextIndex = firstPrevElement.nextIndex;
    elem.prevIndex = firstNextElement.prevIndex;

    firstPrevElement.nextIndex = num;
    firstNextElement.prevIndex = num;
  }
}

function smaller(arr) {
  const workTree = new BinaryTree(arr);

  return workTree.startWork();
}

// const tree = new Tree();

// for (const elem of [5, 4, 7, 9, 2, 4, 1, 4, 5, 6]) {
//   console.log(elem, tree.addElem(elem));
// }

// console.table(tree.getTree());

console.log(smaller([0, -1, -2, 0]), [2, 1, 1, 0]);

// console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
// console.log(smaller([1, 2, 3]), [0, 0, 0]);
// console.log(smaller([1, 2, 0]), [1, 1, 0]);
// console.log(smaller([1, 2, 1]), [0, 1, 0]);
// console.log(smaller([5, 0, -1, -2, 0]), [3, 3, 0, 0, 0]);

// console.log(
//   smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]),
//   [5, 2, 6, 6, 1, 1, 0, 0, 0, 0],
// );

// console.log(
//   smaller([10, 3, 4, 3, 4, 3, 5, 0, 3, 2, 3, 2, 1, 0, 2, 0, 0, 0, 0]),
//   [17, 3, 11, 10, 11, 10, 5, 7, 10, 2, 3, 2, 5, 0, 2, 0, 0, 0, 0],
// );

// console.log(
//   smaller_1([10, 3, 4, 3, 4, 3, 5, 0, 3, 2, 3, 2, 1, 0, 2, 0, 0, 0, 0]),
// );

// newMap.forEach((value, key) => console.log(key, value));
