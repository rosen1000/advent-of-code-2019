import { readFileSync } from "fs";
import path = require("path");

const data = readFileSync(path.join(__dirname, "..", "data", "day1.txt"))
    .toString()
    .split("\r\n")
    .map((i) => parseInt(i));

export function part1() {
    let sum = 0;

    for (let i of data) {
        sum += Math.floor(i / 3) - 2;
    }

    return sum;
}

export function part2() {
    let sum = 0;

    for (let i of data) {
        let fuel = 0;
        while (i > 0) {
            i = Math.floor(i / 3) - 2;
            if (i > 0) fuel += i;
        }
        sum += fuel;
    }

    return sum;
}
