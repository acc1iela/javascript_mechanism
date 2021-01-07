a(); // a is called;

function a() {
  console.log(c);
  var c = 1; // varなのでundefinedが出力される
  d(); // d is called
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
}

var b = 0;
console.log(b);

// varだとlogを上に持ってきてもundefinedが入るだけだがlet, constだとundefinedの初期化がJavaScriptエンジンで行われずerrorが出力される

const ab = () => {
  console.log(c);
  var c = 1; // varなのでundefinedが出力される
  d(); // d is called
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
};

AbortController();
