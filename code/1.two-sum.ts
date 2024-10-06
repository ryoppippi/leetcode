// @leet start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];

    const st = map.get(sub);
    if (st != null) {
      return [i, st];
    }

    map.set(nums[i], i);
  }
  return [];
}
// @leet end
