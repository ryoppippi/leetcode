// @leet start
function groupAnagrams(strs: string[]): string[][] {
  const m = new Map<string, string[]>();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (m.has(key)) {
      m.get(key).push(str);
    } else {
      m.set(key, [str]);
    }
  }

  return Array.from(m.values());
}
// @leet end

