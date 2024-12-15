export function row(n: number): number[] {
  console.log('### test n: ', n)
  let res: number[] = [1]

  for(let rowN = 1; rowN <= n; rowN++) {
    console.log('row n: ', rowN)
    let tempRow = [1]
    for(let j = 1; j < rowN; j++) {
      tempRow.push(res[j-1] + res[j])
      console.log('tempRow: ', tempRow)
    }
    tempRow.push(1)
    res = tempRow
    console.log('res temp: ', res)
  }

  console.log('res final: ', res)
  return res
};

