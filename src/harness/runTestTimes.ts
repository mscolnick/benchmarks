import { runTest } from "./runTest";

export function runTestTimes(name: string, fn: () => void, numberOfTimesList: number[]) {
    for (const numberOfTimes of numberOfTimesList) {
        const allTimes: number[] = [];
        for (let index = 0; index < numberOfTimes; index++) {
            const time = runTest(fn);
            allTimes.push(time);
        }
        console.warn(`[${name} x ${numberOfTimes}]: avg time ${average(allTimes)}`);
    }
}

function average(list: number[]) {
    return list.reduce((acc, item) => acc + item, 0) / list.length;
}
