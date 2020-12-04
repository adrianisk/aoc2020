import * as fs from 'fs';

// TODO: don't be lazy if the input files get big
export function readInputFileForDay(day: number): string[] {
    return readInputFileForDayAsString(day).split('\n');
}

// TODO: don't be lazy if the input files get big
export function readInputFileForDayAsString(day: number): string {
    console.log(`Reading input for day ${day}...`);
    return fs.readFileSync(`./input/day${day}.txt`, 'utf8').toString();
}