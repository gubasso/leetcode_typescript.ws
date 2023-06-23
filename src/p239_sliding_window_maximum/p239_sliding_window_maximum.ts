export function maxSlidingWindow(nums: number[], k: number): number[] {
  let n = nums.length
  let ans: number[] = []
  let queue: number[] = []

  for (let i = 0; i < n; i++) {

    while (queue.length > 0 && nums[i] > nums[queue[queue.length-1]]) {
      queue.pop()
    }
    queue.push(i)

    if (queue[0] + k == i) {
      queue.shift()
    }

    if (i >= k - 1) {
      ans.push(nums[queue[0]])
    }

  }

  return ans
};
