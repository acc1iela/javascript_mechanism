function incrementFactory() {
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

const increment = incrementFactory();
increment();

// 外部からnumは参照できない

// ここからその２
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);
