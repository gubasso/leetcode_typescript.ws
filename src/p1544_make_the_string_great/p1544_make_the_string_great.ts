function isOneUpperOtherLower(c1: string | undefined, c2: string | undefined): boolean {
  if (c1 === undefined && c2 === undefined) { return true }
  if (c1 === undefined || c2 === undefined) { return false }
  if (c1 === c2) { return false }
  return c1.toUpperCase() === c2 || c1 === c2.toUpperCase()
}

export function makeGood(s: string): string {
  let stack = []
  for (let c of s) {
    let last: string | undefined = stack.at(-1)
    let current: string | undefined = c

    if (!isOneUpperOtherLower(last, current)) { stack.push(c) }

    while (isOneUpperOtherLower(last, current)) {
      current = stack.pop()
      last = stack.at(-1)
    }

  }
  return stack.join("")
};
