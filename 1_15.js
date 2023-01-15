function diagonalDifference(arr) {
    console.log(arr);
    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = 0 ; j < arr.length ; j++) {
            if (i === j) {
                console.log(arr[i][j]);
                diag1 += arr[i][j];
            }
        }
    }
    console.log(diag1);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
