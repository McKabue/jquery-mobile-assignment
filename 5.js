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
for (i = 0; i<=10; i++)
{
    /**
     * Assign a random value to the current index 
     * (which is the value of variable i) to array a
     */
    a[i]= Math.random();
    /**
     * Assign a random value to the current index 
     * (which is the value of variable i) to array b
     */
    b[i]= Math.random();
}

/**
 * Print the value of array a
 */
console.log(a);

/**
 * Print the value of array b
 */
console.log(b);