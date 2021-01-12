function a() {
  console.log('called');
}

//a();

// 即時関数

(() => {
  console.log('called');
})();

let c = (() => {
  console.log('called');
  return 0;
})();

console.log(c);
