let outputSpace = document.querySelector('#outputHere');

for (let counter = '#'; counter.length < 8; counter += '#') {
	console.log(counter);
}

// for (let num = 1; num <= 100; num++) {
// 	if ((num % 3 && num % 5) != 0) {
// 		console.log(num);
// 	}if (num % 3 == 0) {
// 		console.log('Fizz');
// 	}if (num % 5 == 0) {
// 		console.log('Buzz');
// 	}if ((num % 3 ==0) && (num %5 == 0)) {
// 		console.log('FizzBuzz');
// 	}
// }
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }