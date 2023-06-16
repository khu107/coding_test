// function solution(phone_number) {
//   let answer = phone_number.splice(0, -4);
//   return answer;
// }

// console.log(solution('01033334444'));

// let a = '01033334444';
// for (let i = 0; i < a.length; i++) {}

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (data) => {
//   const n = data.split(' ');
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   for (let i = 0; i < b; i++) {
//     console.log(i);
//   }
//   console.log(a);
//   console.log(b);
// });
function solution(a, b) {
  var answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer = answer += i;
    }
  } else if (a >= b) {
    for (let i = b; i <= a; i++) {
      answer = answer += i;
    }
  }

  return answer;
}
console.log(solution(3, 5));
