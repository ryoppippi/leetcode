// @leet start
function permute(_nums: number[]): number[][] {
  const nums = _nums.slice();
  const r = new Set<number[]>();

  function dfs(start: number) {
    if (start === nums.length) {
      r.add(nums.slice());
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      dfs(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  dfs(0);

  return [...r];
}
// @leet end

