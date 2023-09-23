// №1

let promiseTwo = new Promise((resolve, reject) => {
  resolve('a');
});

promiseTwo
  .then((res) => {
    return res + 'b'; // 'ab'
  })
  .then((res) => {
    return res + 'с'; // 'abc'
  })
  .finally((res) => {
    return res + '!!!!!!!'; // 'abc!!!!!!!'
  })
  .catch((res) => {
    return res + 'd';
  })
  .then((res) => {
    console.log(res); //
  });

// №2

function doSmth() {
  return Promise.resolve('123');
}

doSmth()
  .then(function (a) {
    console.log('1', a); // 1 123
    return a;
  })
  .then(function (b) {
    console.log('2', b); // 2 123
    return Promise.reject('321');
  })
  .catch(function (err) {
    console.log('3', err); // 3 321
  })
  .then(function (c) {
    console.log('4', c); // 4 undefined
    return c;
  });

// №3

const arr = [10, 12, 15, 21];

const showIndex = () => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000 * i);
  }
};
showIndex();

// №4

function fetchURL(url) {
  let attempts = 5;
  console.log('waiting..');

  return new Promise((resolve, reject) => {
    const makeRequest = () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            resolve(response.text());
          } else {
            throw new Error('error');
          }
        })
        .catch((error) => {
          attempts--;
          if (attempts === 0) {
            reject(error);
          } else {
            console.log(`${attempts} attempts left`);
            setTimeout(makeRequest, 3000);
          }
        });
    };
    makeRequest();
  });
}

fetchURL('https://google/com&#39');
