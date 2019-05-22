exampleArray = [1, 4, 7, 23, 5, 9];

const sumsToTarget = (arr, target) => {
    for (let i = 0; i < (arr.length - 1); i++) { // i stays the same while j is less than the array length
        const first = arr[i]; 
        for (let j = i+1; j < arr.length; j++) { // j needs to always be 1 greater than i so that i is never equal to j
            const second = arr[j]; 
            const sum = first + second;
            if (sum === target) { // returns the numbers when the sum of compared numbers are equal to the target
                return [first, second]; 
            }
        }
    }
    // output to console when no sum is equal to the target
    console.log("Sorry, could not find any sum equal to the target number.");
}

// finds the sum in exampleArray, returns the two numbers
sumsToTarget(exampleArray, 11);

// doesn't find the sum in exampleArray, gives an error message
sumsToTarget(exampleArray, 15);

// finds the sum in the array, returns two numbers
sumsToTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 16);
