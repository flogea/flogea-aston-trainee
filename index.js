// №1

// Алгоритмы:
// Алгоритм Дейкстры
// Дерево

// Поиск:
// Линейный поиск O(n)
// Бинарный поиск O(log2n)
// Поиск в ширину

// Сортировки:
// Сортировка пузырьком O(n^2)
// Сортировка выбором O(n^2)
// Быстрая сортировка O(log2n * n)
// Рекурсия

// №3

const Person = {
  name: 'Katua',
  age: 22,
  logInfo: function () {
    console.log(`My name is ${this.name}, i'm ${this.age} y.o.`);
  },
};
Object.create(Person);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let kat = new Person('Katua', 22);

const Person2 = {};
Object.assign(Person2, Person);
Person2.logInfo(); // My name is Katua, i'm 22 y.o.

// №4

class PersonThree {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set setName(name) {
    this.name = name;
  }

  set setAge(age) {
    this.age = age;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }
}

class PersonChild extends PersonThree {
  constructor(name, age, weight, height) {
    super(name, age);
    this.weight = weight;
    this.height = height;
  }

  set setWeight(weight) {
    this.weight = weight;
  }
  set setHeight(height) {
    this.height = height;
  }

  get getWeight() {
    return this.weight;
  }

  get getHeight() {
    return this.height;
  }
}

const katua = new PersonChild('katua', 22, 49, 173);
console.log(katua.getAge, katua.getHeight); // 22 173

const notKatua = new PersonThree('notKatua', 0);
console.log(notKatua.getAge, notKatua.getHeight); // 0 undefined, т.к у класса родителя нет методов класса наследника

// №5

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

// O^2
const firstSum = (arr, total) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        console.log(arr[i], arr[j]); // 4, 9
        return (result = [arr[i], arr[j]]);
      }
    }
  }
};

// O(n)
const firstSumAnotherMethod = (arr, total) => {
  let result = [];
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    let complement = total - arr[i];
    if (set.has(complement)) {
      result.push(arr[i]);
      result.push(complement);
      console.log(result); // 4, 9
      return result;
    }
  }
  return result;
};

firstSum(arr, total);
firstSumAnotherMethod(arr, total);
