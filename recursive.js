/*function fun(n) {
    if (n == 4)
        return n;
    else
        return 2 * fun(n + 1);
}
console.log(fun(2));*/
/*
function fun(x, y) {
    if (x == 0)
        return y;
    return fun(x - 1, x + y);
}
console.log(fun(4, 3));*/


/*function f(n) {
    if (n <= 1) return 1;
    if (n % 2 == 0) return f(Math.floor (n / 2));
    return f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1));
}
console.log(f(11));*/

console.time();
var factorial = (num)=> {
    if (num<=0)
        return 1;
    else {
        return num * factorial(num-1)
    }
    }
console.log(factorial(5));
console.timeEnd;
console.dir(document.location);


//Dynamic Programming - more efficient than recursion as it avoids running the functions again & again and will remember the outputs

