
import { readInputFileForDay } from './shared/util';
const DESIRED_SUM = 2020;

const INPUT = readInputFileForDay(1).map(x => parseInt(x));

function solveDay1Part1(input: number[]): number | null {
    const valuesSet: Set<number> = new Set<number>(input);
    for (const num of input) {
        if (valuesSet.has(DESIRED_SUM - num)) {
            return num * (DESIRED_SUM - num);
        }
    }
    return null;
}

function solveDay1Part2(input: number[]): number | null {
    const valuesSet: Set<number> = new Set<number>(input);
    for (let a = 0; a < input.length; a++) {
        for (let b = a + 1; b < input.length; b++) {
            if (valuesSet.has(DESIRED_SUM - (input[a] + input[b]))) {
                return input[a] * input[b] * (DESIRED_SUM - (input[a] + input[b]));
            }
        }
    }
    return null;
}

console.log("Solution for day 1 part 1 is: " + solveDay1Part1(INPUT));
console.log("Solution for day 1 part 2 is: " + solveDay1Part2(INPUT));