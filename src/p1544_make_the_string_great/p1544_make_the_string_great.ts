export function makeGood(s: string): string {
  let stack: string[] = []
  for (let c of s) {
    let last: string | undefined = stack.at(-1)
    if (!last || last === c || c.toUpperCase() !== last.toUpperCase()) {
      stack.push(c)
    } else {
      stack.pop()
    }
  }
  return stack.join("")
};
