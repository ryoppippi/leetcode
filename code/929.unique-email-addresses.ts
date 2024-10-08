// @leet start
function numUniqueEmails(emails: string[]): number {
  const s = new Set<string>();
  for (const e of emails) {
    const [f, a] = e.trim().split("@");
    const mf = f.split("+")[0].replace(/\./g, "");
    const b = `${mf.trim()}@${a.trim()}`;
    s.add(b);
  }
  return s.size;
}
// @leet end

