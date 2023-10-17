// Generate Fibonacci sequence

var fib = function(n) {
    var fibo = [0, 1];
    if (n <= 2) return 1;
    for (var i = 2; i <=n; i++ ) {
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo[n];
};

console.log(fib(12));

// Path: comments.js
// Generate Fibonacci sequence recursively

var fib = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
};
console.log(fib(12));

// Path: comments.js
// Bubble Sort

var bubbleSort = function(array) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < array.length-1; i++) {
            if (array[i+1] < array[i]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    }
    return array;
};

console.log(bubbleSort([6,5,4,3,2,1]));

// Path: comments.js
// Merge Sort

var mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }

    var middle = parseInt(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
};

console.log(mergeSort([6,5,4,3,2,1]));

// Path: comments.js
// Quicksort

var quickSort = function(array) {
    if (array.length < 2) {
        return array;
    }

    var pivot = array