// @leet start
/**
 * swap the first number that is smaller than the number after it
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // reverse the rest

  const s = nums.slice(i + 1);
  s.reverse();
  s.forEach((v, index) => {
    nums[i + 1 + index] = v;
  });
}
// @leet end

