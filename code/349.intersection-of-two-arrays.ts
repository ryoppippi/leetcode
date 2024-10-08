// @leet start
function intersection(nums1: number[], nums2: number[]): number[] {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  const ans = new Set<number>();
  for (const s of s1.values()) {
    if (s2.has(s)) {
      ans.add(s);
    }
  }

  return Array.from(ans);
}
// @leet end

