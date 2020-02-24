const { performance } = require("perf_hooks");

export class Timer {
    public static start() {
        return new Timer();
    }
    private startTime: number;

    private constructor() {
        this.startTime = performance.now();
    }

    public stop() {
        return performance.now() - this.startTime;
    }
}
