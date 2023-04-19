const arr = [[11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]]
function diagonalDifference(arr) {
    // Write your code here
    
    let primarySum = 0;
    let secondarySum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - i - 1];
    }

    return Math.abs(primarySum - secondarySum);
}