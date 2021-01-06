let a = 0; // これが外部変数に該当する
function b() {
  console.log(this, arguments, a);
}

console.log(a);
b();
