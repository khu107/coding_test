let arr = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
let p = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    p.push(arr[i][j]);
  }
}
console.log(p.reduce((a, b) => a * b));
