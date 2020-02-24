import { runTestTimes } from "../harness/runTestTimes";

const size = 10000;
const array = [...Array(size)].map(() => Math.floor(Math.random() * 9));
const map = new Map(array.map(n => [n, n]));

runTestTimes(
    "Array#slice",
    () => {
        const result = array.slice();
    },
    [1, 10, 100, 1000],
);

runTestTimes(
    "Array#from + Map#values",
    () => {
        const result = Array.from(map.values());
    },
    [1, 10, 100, 1000],
);
