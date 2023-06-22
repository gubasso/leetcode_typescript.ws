export class RecentCounter {
    deque: number[]
    constructor() {
      this.deque = []
    }

    ping(t: number): number {
      this.deque.push(t)

      while (this.deque[0] !== undefined && this.deque[0] < t - 3000) {
        this.deque.shift()
      }

      return this.deque.length
    }
}
