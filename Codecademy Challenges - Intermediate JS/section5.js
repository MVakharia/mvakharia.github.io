const numbers = [5, 3, 9, 20];

function smallestPowerOfTwo(arr) {
    let results = [];
    let number = 0;

    for(let i = 0; i < arr.length; i++) {
        number = arr[i];

        let powerOf2 = 1;

        while(powerOf2 < number) {
            powerOf2 *= 2
        }

        results.push(powerOf2);
    }

    return results;
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ]