import { readFileSync } from "fs";
import path = require("path");

export function part1() {
    const data = readFileSync(path.join(__dirname, "..", "data", "day2.txt"))
        .toString()
        .split(",")
        .map((i) => parseInt(i));
    data[1] = 12;
    data[2] = 2;
    let pointer = 0;

    while (pointer < data.length) {
        if (data[pointer] == 1) {
            data[data[pointer + 3]] = data[data[pointer + 1]] + data[data[pointer + 2]];
            pointer += 4;
        } else if (data[pointer] == 2) {
            data[data[pointer + 3]] = data[data[pointer + 1]] * data[data[pointer + 2]];
            pointer += 4;
        } else if (data[pointer] == 99) {
            break;
        }
    }

    return data[0];
}

export function part2() {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            let data = readFileSync(path.join(__dirname, "..", "data", "day2.txt"))
                .toString()
                .split(",")
                .map((i) => parseInt(i));
            let pointer = 0;

            data[1] = noun;
            data[2] = verb;

            while (pointer < data.length) {
                if (data[pointer] == 1) {
                    data[data[pointer + 3]] = data[data[pointer + 1]] + data[data[pointer + 2]];
                    pointer += 4;
                } else if (data[pointer] == 2) {
                    data[data[pointer + 3]] = data[data[pointer + 1]] * data[data[pointer + 2]];
                    pointer += 4;
                } else if (data[pointer] == 99) {
                    break;
                }
            }

            if (data[0] == 19690720) return 100 * noun + verb;
        }
    }
}
