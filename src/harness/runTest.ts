import { Timer } from "./Timer";

export function runTest(fn: () => void) {
    const timer = Timer.start();
    fn();
    const end = timer.stop();
    return end;
}

export function runTestAndLog(name: string, fn: () => void) {
    const end = runTest(fn);
    console.warn(`[${name}]: time ${end}`);
}
