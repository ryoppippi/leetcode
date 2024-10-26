// @leet start

/**
 * compare to row4 & row5
 *
 * row4 : 01101001
 * row5 : 011010011001011
 *
 * so we can see that row5 is row4 + row4's reverse
 *
 * row5 : row4 + reverse(row4)
 * -> recursion!!!!
 *
 * if k <= mid: the nth in row-n is the same as the kth in row-(n-1)
 * if k > mid: the nth in row-n is the opposite of the kth in row-(n-1)
 */
function kthGrammar(n: number, k: number): number {
  if (n === 1) {
    return 0;
  }

  const mid = 2 ** (n - 1) / 2;

  if (k <= mid) {
    return kthGrammar(n - 1, k);
  } else {
    return 1 - kthGrammar(n - 1, k - mid);
  }
}
// @leet end

