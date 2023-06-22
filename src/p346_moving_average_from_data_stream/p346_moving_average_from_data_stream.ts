export class MovingAverage {
    size: number
    sum: number
    deque: number[]

    constructor(size: number) {
      this.size = size
      this.sum = 0
      this.deque = []
    }

    next(val: number): number {
      if (this.deque.length >= this.size) {
        this.sum -= this.deque.shift() || 0
      }
      this.deque.push(val)
      this.sum += val
      return Math.round((this.sum / this.deque.length) * 100000) / 100000
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
