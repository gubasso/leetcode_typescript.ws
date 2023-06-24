export function longestSubarray(nums: number[], limit: number): number {
  let ans = 0
  let l = 0

  let inc: number[] = []
  let dec: number[] = []

  for (let r = 0; r < nums.length; r++) {
    while (inc.at(0) && nums[r] < inc[inc.length-1]) {
      inc.pop()
    }
    inc.push(nums[r])
    while (dec.at(0) && nums[r] > dec[dec.length-1]) {
      dec.pop()
    }
    dec.push(nums[r])

    while (dec[0] && inc[0] && dec[0] - inc[0] > limit) {
      if (dec[0] == nums[l]) { dec.shift() }
      if (inc[0] == nums[l]) { inc.shift() }
      l += 1
    }

    ans = Math.max(ans, r - l + 1)

  }

  return ans
};
