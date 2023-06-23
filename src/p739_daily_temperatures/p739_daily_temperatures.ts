export function dailyTemperatures(temperatures: number[]): number[] {
  let n = temperatures.length
  let ans: number[] = new Array(n).fill(0)
  let stack: number[] = []
  let temp = temperatures

  for (let i = 0; i < n; i++) {
    let isStack = stack.length > 0
    let j = stack.at(-1)

    while (isStack && j !== undefined && temp[i] > temp[j]) {
      j = stack.pop() || 0
      ans[j] = i - j
      j = stack.at(-1)
    }
    stack.push(i)

  }

  return ans
};
