
/**
 * Declare a variable named a and assign it an empty array
 */
var a = [];

/**
 * Declare a variable named b and assign it an empty array
 */
var b = [];

/**
 * Loop from 0 to 10
 */
for (i = 0; i <= 10; i++) {
    /**
     * Assign a random value to the current index 
     * (which is the value of variable i) to array a
     */
    a[i] = Math.random();
    /**
     * Assign a random value to the current index 
     * (which is the value of variable i) to array b
     */
    b[i] = Math.random();
}

const distance = (arrayA, arrayB) => {
    let i = 0;
    const n = arrayA.length;
    let sum = 0;
    for (i; i <= (n - 1); i++) {
        sum += ((arrayA[i] - arrayB[i]) ** 2)
    }

    return Math.sqrt(sum) / n;
};

console.log(distance(a, b));