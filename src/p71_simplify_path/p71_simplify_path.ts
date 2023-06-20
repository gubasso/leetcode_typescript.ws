export function simplifyPath(path: string): string {
  let pathArr = path.split('/')
  let stack = []

  for (let e of pathArr) {
    if (e.length === 0 || e === '.') continue
    if (e === '..') { stack.pop(); continue }
    stack.push(e)
  }
  return '/' + stack.join('/')

};
