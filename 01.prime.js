console.log("\nAll prime numbers 0 - 100!\n")

function PrimeNumber(number) {

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let counter = 0;

for (i = 1; i <= 100; i++) {

    IsPrime = PrimeNumber(i)
    if (IsPrime) {
        console.log(i);
        counter++;
    }
}

console.log("\n Sum = " + counter);    