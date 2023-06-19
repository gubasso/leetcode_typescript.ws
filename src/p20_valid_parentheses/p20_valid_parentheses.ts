export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) { return false }
  let map = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  let stack = []

  for (let c of s) {
    let correspondedOpen = map.get(c)
    if (!correspondedOpen) {
      stack.push(c)
      continue
    }
    let lastElem = stack.at(-1)
    if (lastElem === correspondedOpen) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0

};
