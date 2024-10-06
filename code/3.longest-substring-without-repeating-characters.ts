function lengthOfLongestSubstring(str: string): number {
  let ans = 0;

  let pos = -1;

  const map = new Map<string, number>();

  Array.from(str).forEach((char, index) => {
    const d = map.get(char);

    /** if map has char previous index and the candidate left position is less than the previous index, update the left position */
    if (d != null && d > pos) {
      pos = d;
    }

    map.set(char, index);

    ans = Math.max(ans, index - pos);
  });
  return ans;
}
