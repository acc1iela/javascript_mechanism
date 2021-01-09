function a() {
  let b = 0;
  console.log(b);
}
//console.log(b); // error
// 関数スコープの範囲外だから
a();

// ブロックスコープ内でvarを使うとブロックスコープにならない
{
  let c = 1;
  console.log(c);

  const d = () => {
    console.log('d is called'); // functionでやるとブロックスコープにならずに外からでも参照できしまう
  };

  d();
}
// logをスコープの外に持っていくとエラーになる
