// @leet start
function isSubsequence(s: string, t: string): boolean {
  let count = 0;

  for (const char of t) {
    if (char === s[count]) {
      count++;
    }
  }

  return count === s.length;
}
// @leet end

