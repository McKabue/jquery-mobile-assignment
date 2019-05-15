
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

const borderStyle = `style="border: 1px solid;"`;

const columns = a.map((value, index) => `
<tr> 
    <td ${borderStyle}>${index}</td>
    <td ${borderStyle}>${a[index]}</td> 
    <td ${borderStyle}>${b[index]}</td> 
</tr>`).join('');

const table =
    `<table ${borderStyle}>
    <tr>
        <td ${borderStyle}>i</td>
        <td ${borderStyle}>a[i}</td>
        <td ${borderStyle}>b[i]</td>
    </tr>
    ${columns}
</table>`;
console.log(table);