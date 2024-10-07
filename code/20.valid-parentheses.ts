// @leet start
const PARENTIES = ['(', ')', '{', '}', '[', ']' ] as const
type Parenty = typeof PARENTIES[number]

function isValid(str: string): boolean {
  const st: Parenty[] = []
  const m = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for(const _s of str){
    const s = _s as Parenty

    /** 入ってるってことは開き括弧 */
    if(m[s]!=null) st.push(m[s]);

    
    /* stackの一番上の要素と入ってきた閉じ括弧が同じか確認 */
    else if(st.length>0 && st.at(-1) === s ) st.pop()

    /* 違うならfalse */
    else return false
  }
  /* stackが空ならtrue */
  return st.length ===0
};
// @leet end
