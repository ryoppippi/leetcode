// @leet start
function subarraySum(nums: number[], k: number): number {
  let ans = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let sum = nums[i];
    if (sum === k) {
      ans += 1;
    }
    for (let j = i + 1; j < nums.length; j += 1) {
      sum += nums[j];
      if (sum === k) {
        ans += 1;
      }
    }
  }
  return ans;
}

// @leet end
