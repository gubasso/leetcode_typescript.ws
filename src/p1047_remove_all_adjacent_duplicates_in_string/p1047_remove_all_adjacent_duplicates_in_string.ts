export function removeDuplicates(s: string): string {
  let stack: string[] = []

  for (let c of s) {
    let last: string | undefined = stack.at(-1)
    if (last === c) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  return stack.join("")
};
