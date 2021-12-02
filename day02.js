'use strict'

// Part 1
// ======

const part1 = input => {
    let horizontal = 0, depth = 0;

    input.split("\n").forEach(movement => {
        let [direction, amount] = movement.split(' ');
        amount = parseInt(amount);

        switch (direction) {
            case "forward":
                horizontal += amount;
                break;
            case "down":
                depth += amount;
                break;
            case "up":
                depth -= amount;
                break;
        }
    })

    return horizontal * depth;
}

// Part 2
// ======

const part2 = input => {
    let horizontal = 0, depth = 0, aim = 0;

    input.split("\n").forEach(movement => {
        let [direction, amount] = movement.split(' ');
        amount = parseInt(amount);

        switch (direction) {
            case "forward":
                horizontal += amount;
                depth += aim * amount;
                break;
            case "down":
                aim += amount;
                break;
            case "up":
                aim -= amount;
                break;
        }
    })

    return horizontal * depth;
}

module.exports = {part1, part2}
