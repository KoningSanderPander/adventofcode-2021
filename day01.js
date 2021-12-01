'use strict'

// Part 1
// ======

const part1 = input => {
    console.log(input);

    return input.split("\n").map(v => parseInt(v)).reduce((previous, current, index, array) =>
        previous + ((current > array[index - 1]) ? 1 : 0), 0);

}

// Part 2
// ======

const part2 = input => {
    return input.split("\n").map(v => parseInt(v)).reduce((previous, current, index, array) =>
        previous + ((sumOfLastThree(array, index) > sumOfLastThree(array, index - 1)) ? 1 : 0), 0);
}

const sumOfLastThree = (arr, i) => arr[i] + arr[i - 1] + arr[i - 2]

module.exports = {part1, part2}
