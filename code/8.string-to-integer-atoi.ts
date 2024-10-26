// @leet start
function myAtoi(_s: string): number {
  const s = _s.trim();

  if (!s) {
    return 0;
  }

  let i = 0;

  while (i < s.length) {
    const c = s[i];
    if (!("0" <= c && c <= "9") && c !== "." && c !== "-" && c !== "+") {
      break;
    }
    i++;
  }

  const num = parseInt(s.slice(0, i), 10);

  switch (true) {
    case isNaN(num):
      return 0;
    case num > Math.pow(2, 31) - 1:
      return Math.pow(2, 31) - 1;
    case num < -Math.pow(2, 31):
      return -Math.pow(2, 31);
    default:
      return num;
  }
}
// @leet end

