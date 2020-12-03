import { readInputFileForDay } from './shared/util';


const INPUT = readInputFileForDay(3);
const TREE = '#';

function solveDay3Part1(input: string[], hSlope: number, wSlope: number): number {
    // [h][w]
    const map: string[][] = input.map(x => Array.from(x));
    const mapHeight = map.length;
    const mapWidth = map[0].length;
    let h = 0, w = 0;
    let treeCount = 0;
    while ((h += hSlope) < mapHeight) {
        w = (w + wSlope) % mapWidth;
        treeCount = map[h][w] === TREE ? treeCount + 1 : treeCount;
    }
    return treeCount;
}

function solveDay3Part2(input: string[]): number {
    return solveDay3Part1(input, 1, 1) *
        solveDay3Part1(input, 1, 3) *
        solveDay3Part1(input, 1, 5) *
        solveDay3Part1(input, 1, 7) *
        solveDay3Part1(input, 2, 1);
}


console.log("Solution for day 3 part 1 is: " + solveDay3Part1(INPUT, 1, 3));
console.log("Solution for day 3 part 2 is: " + solveDay3Part2(INPUT));