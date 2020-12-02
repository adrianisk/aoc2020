import { readInputFileForDay } from './shared/util';


const INPUT = readInputFileForDay(2);

function solveDay2Part1(input: string[]): number {
    return input.map(x => x.split(' ')).map(x => {
        const rangeSplit = x[0].split('-');
        return {
            rangeMin: parseInt(rangeSplit[0]),
            rangeMax: parseInt(rangeSplit[1]),
            char: x[1].replace(':', ''),
            password: x[2]
        };
    }).filter(x => {
        const charCount = Array.from(x.password).filter(c => x.char === c).length;
        return charCount >= x.rangeMin && charCount <= x.rangeMax;
    }).length
}

function solveDay2Part2(input: string[]): number {
    return input.map(x => x.split(' ')).map(x => {
        const rangeSplit = x[0].split('-');
        return {
            rangeMin: parseInt(rangeSplit[0]),
            rangeMax: parseInt(rangeSplit[1]),
            char: x[1].replace(':', ''),
            password: x[2]
        };
    }).filter(x => {
        const passArray = Array.from(x.password);
        return (passArray[x.rangeMin - 1] === x.char) !== (passArray[x.rangeMax - 1] === x.char);
    }).length
}


console.log("Solution for day 2 part 1 is: " + JSON.stringify(solveDay2Part1(INPUT)));
console.log("Solution for day 2 part 2 is: " + JSON.stringify(solveDay2Part2(INPUT)));