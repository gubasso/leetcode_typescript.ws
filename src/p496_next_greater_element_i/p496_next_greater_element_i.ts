export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let ans: number[] = []
  let dec: number[] = []
  let map = new Map<number | undefined, number>();

  for (let n of nums2) {
    while (dec.length > 0 && n > dec[dec.length-1] ) {
      map.set(dec.pop(), n)
    }
    dec.push(n)
  }

  for (let n of nums1) {
    let val = map.get(n) || -1
    ans.push(val)
  }

  return ans
};
