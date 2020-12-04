import { readInputFileForDayAsString } from './shared/util';


const INPUT = readInputFileForDayAsString(4);
const FIELD_CHECKS: { [field: string]: (val: string) => boolean; } = {
    'byr': (val: string) => parseInt(val) >= 1920 && parseInt(val) <= 2002,
    'iyr': (val: string) => parseInt(val) >= 2010 && parseInt(val) <= 2020,
    'eyr': (val: string) => parseInt(val) >= 2020 && parseInt(val) <= 2030,
    'hgt': (val: string) => {
        const isCm = val.endsWith('cm');
        const valNum = parseInt(val.substr(0, val.length - 2));
        return isCm ? valNum >= 150 && valNum <= 193 : valNum >= 59 && valNum <= 76;
    },
    'hcl': (val: string) => /^#[0-9a-f]{6}$/.test(val),
    'ecl': (val: string) => new Set<string>(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']).has(val),
    'pid': (val: string) => /^[0-9]{9}$/.test(val),
    'cid': (_val: any) => true,

}

function solveDay4Part1(input: string): any {
    return input.split('\n\n')
        .map(x => x.split(/\n|\s+/))
        .map(x => x.map(element => element.split(':')[0]))
        .filter(keys => keys.filter(key => key !== 'cid').length === 7).length;
}

function solveDay4Part2(input: string): any {
    return input.split('\n\n')
        .map(x => x.split(/\n|\s+/))
        .map(x => x.map(element => ({ field: element.split(':')[0], value: element.split(':')[1] })))
        .filter(fields => fields.filter(fv => fv.field !== 'cid').length === 7)
        .filter(fields => Math.min(
            ...fields.map(x => (FIELD_CHECKS[x.field])(x.value) ? 1 : 0))).length;
}


console.log("Solution for day 4 part 1 is: " + solveDay4Part1(INPUT));
console.log("Solution for day 4 part 2 is: " + JSON.stringify(solveDay4Part2(INPUT)));