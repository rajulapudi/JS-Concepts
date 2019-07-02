/*Arrays & Multi Dimensional Arrays*/

var one = [1, 2, 3, 4, 5]; /*one dimensional array*/

var two = [[1, 2], [3, 4], [5, 6]] /*two dimensionals = group of one dimensional arrays*/

console.log(two. [0][0]) /*accessing the two dimensional elements*/


var three = [[[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 4], [5, 6]]] /* three dimensional arrays group of 2D arrays*/

/*accessing elements in 3D array*/

console.log(three[0]);

/*group of (n-1) dimensional arrays is n dimensional array*/

/*arrays can be used to represent matrices and solve algos involving matrices
matrices equiv to tuples in python

ex: - we use matrices in storing websie stats for seo etc*/


/*adding teo matrices using 1D array*/
/* for 2 x 2 matrix*/


var matrix1 = [1, 2, 3, 4];
var matrix2 = [5, 6, 7, 8];

var sum = []; /* wiritng a program to create the sum of matrices  - so creating an empty array to store the value sums*/

for (let index = 0; index < matrix1.length; index++) {
    sum[index] = matrix1[index] + matrix2[index];
}
console.log(`the sum of two matrices : ${sum}`);

/* same problem with two dimensional array*/

var matrix1 = [[1, 2], [3, 4]];
var matrix2 = [[5, 6], [7, 8]];

var sum = [[], []]; /* wiritng a program to create the sum of matrices  - so creating an empty array to store the value sums*/

for (let m1index = 0; m1index < matrix1.length; m1index++) {
    for (let m2index = 0; m2index < matrix2.length; m2index++) {
        sum[m1index][m2index] = matrix1[m1index][m2index] + matrix2[m1index][m2index];
    }
}
console.log(`the sum of two matrices : ${sum}`);


var matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrix2 = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];

var sum = [[], [], []]; /* wiritng a program to create the sum of matrices  - so creating an empty array to store the value sums*/

for (let m1index = 0; m1index < matrix1.length; m1index++) {
    for (let m2index = 0; m2index < matrix2.length; m2index++) {
        sum[m1index][m2index] = matrix1[m1index][m2index] + matrix2[m1index][m2index];
    }
}
console.log(`the sum of two matrices : ${sum}`);


/*USING 3D ARRAYS*/


var matrix1 = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];
var matrix2 = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];

var sum = [[[], [], []], [[], [], []], [[], [], []]];

for (let m1index = 0; m1index < matrix1.length; m1index++) {
    for (let m2index = 0; m2index < matrix2.length; m2index++) {
        for (let m3index = 0; m3index < matrix1.length; m3index++) {
            sum[m1index][m2index][0] = matrix1[m1index][m2index][0] + matrix2[m1index][m2index][0];
        }
    }

}
console.log(`the sum of two matrices : ${sum}`);


var matrix1 = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];
var matrix2 = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];

var sum = [[[], [], []], [[], [], []], [[], [], []]];

for (let m1index = 0; m1index < matrix1.length; m1index++) {
    for (let m2index = 0; m2index < matrix2.length; m2index++) {
        sum[m1index][m2index][0] = matrix1[m1index][m2index][0] + matrix2[m1index][m2index][0];
    }

}
console.log(`the sum of two matrices : ${sum}`);


var sdarr = [];

for (let i = 1; i <= 3; i++) {
    var x = Math.random() * Math.floor(5);
    var y = Math.random() * Math.floor(5);
    var z = Math.random() * Math.floor(5);
    sdarr.push([x, y, z]);
}
