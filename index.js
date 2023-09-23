// №1

// На самом деле массивы в JavaScript являются “неправильными” и совмещают в себе функции сразу нескольких структур
// данных. По задумке длина массива должна быть неизменной. Для того, чтобы добавить элемент в массив, нужно создать новый
// массив длиннее старого на 1 элемент, затем скопировать в него все значения старого массива и в качестве последнего элемента
// указать новое значение.

// №2

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj1 = { item: 'some value call' };
const obj2 = { item: 'some value apply' };
const obj3 = { item: 'some value bind' };

logger.call(obj1); // some value
logger.apply(obj2); // some value
const loggerWithBind = logger.bind(obj3);
loggerWithBind(); // some value

// №3
