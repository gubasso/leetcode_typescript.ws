export class StockSpanner {
  decStack: number[][]
  constructor() {
    this.decStack = []
  }

  next(price: number): number {
    let span = 1
    while (this.decStack.length > 0 && price >= this.decStack[this.decStack.length-1][0]) {
      let last = this.decStack.pop() || [0,0]
      span += last[1]
    }
    this.decStack.push([price, span])
    return span
  }

}
