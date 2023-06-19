function applyCharToStack(stack: string[], char: string): string[] {
  if (char === '#') {
    stack.pop()
  } else if (char) {
    stack.push(char)
  }
  return stack
}

export function backspaceCompare(s: string, t: string): boolean {
  let sStack: string[] = []
  let tStack: string[] = []
  let n: number = s.length
  if (t.length > s.length) { n = t.length }

  for (let i = 0; i < n; i++) {
    sStack = applyCharToStack(sStack, s[i])
    tStack = applyCharToStack(tStack, t[i])
  }

  if (sStack.length !== tStack.length) { return false }

  for (let i = 0; i < n; i++) {
    if (sStack[i] !== tStack[i]) { return false }
  }

  return true

};
