export function getAverages(nums: number[], k: number): number[] {

  if (k === 0) { return nums }
  let n = nums.length
  let totalElem = 2*k + 1
  let avgs: number[] = Array(n).fill(-1)

  if (totalElem > n) { return avgs }

  let prefix: number[] = [nums[0]]
  for (let i = 1; i < n; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i])
  }

  for (let i = k; i < n - k; i++) {
    let l = i - k
    let r = i + k
    avgs[i] = Math.floor((prefix[r] - prefix[l] + nums[l]) / totalElem)
  }

  return avgs
};
