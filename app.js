// While1
let A = 10;
let B = 3;
do {
    A = A - B;
} while (A >= B);
console.log("Qoldiq:", A);

// While2
A = 10;
B = 3;
let count = 0;
do {
    A = A - B;
    count++;
} while (A >= B);
console.log("Joylashishlar soni:", count);

// While3
let N = 10;
let K = 3;
do {
    N = N - K;
} while (N >= K);
console.log("Qoldiq:", N);

// While4
let n = 27;
do {
    if (Math.pow(3, Math.round(Math.log(n) / Math.log(3))) === n) {
        console.log("3 ning darajasi");
    } else {
        console.log("3 ning darajasi emas");
    }
    break;
} while (n > 0);

// While5
n = 16;
let k = 0;
do {
    k++;
} while (Math.pow(2, k) <= n);
console.log("Daraja:", k - 1);

// While6
n = 5;
let doubleFactorial = 1;
do {
    doubleFactorial *= n;
    n -= 2;
} while (n > 0);
console.log("N!!:", doubleFactorial);

// While7
n = 10;
k = 0;
do {
    k++;
} while (k * k <= n);
console.log("Katta butun k:", k - 1);

// While8
n = 10;
k = 0;
do {
    k++;
} while (k * k <= n);
console.log("Kichik butun k:", k);

// While9
n = 28;
k = 0;
do {
    k++;
} while (Math.pow(3, k) <= n);
console.log("Eng kichik k:", k);

// While10
n = 28;
k = 0;
do {
    k++;
} while (Math.pow(3, k) < n);
console.log("Eng katta k:", k - 1);