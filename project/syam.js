function findMissingNumber(arr, N) {
    // Calculate the sum of first N integers using the formula (N * (N + 1)) / 2
    const expectedSum = (N * (N + 1)) / 2;

    // Calculate the sum of elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

// Example usage:
const arr = [1, 2, 4, 6, 3, 7, 8];
const N = arr.length + 1; // N is one more than the length of the array

const missingNumber = findMissingNumber(arr, N);
console.log("The missing number is:", missingNumber);