// №1
const counter = {};
const counter1 = Object.create(null);
const counter3 = Object.assign({}, {});

// №2
const copyObj = () => {
  const obj1 = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
  const obj2 = {};

  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      const element = obj1[key];
      obj2[key] = element;
    }
  }
  return obj2;
};
copyObj();

const copyObjv2 = () => {
  const obj1 = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
  const obj2 = {};

  Object.assign(obj2, obj1);
  console.log(obj2);
  return obj2;
};
copyObjv2();

// №3

function makeCounter() {}

const makeCounter = () => {};

const makeCounter = function () {};

const makeCounter = function newMakeCounter() {};

// Bonus #1
// Написать функцию глубокого сравнения двух объектов:

const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' };
const obj2 = { here: { is: 'on', other: '2' }, object: 'Y' };

const deepEqual = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (!Object.keys(obj2).includes(key)) {
      return false;
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

// Bonus #2
// Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }
  return arr.join('');
}
reverseStr('Привет');

function reverseStr2(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr.reverse().join('');
}
reverseStr2('Привет');

function reverseStr3(str) {
  return str.split('').reverse().join('');
}
reverseStr3('Привет');
