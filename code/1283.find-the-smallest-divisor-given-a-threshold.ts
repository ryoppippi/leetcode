// @leet start

/** TLE */
// function smallestDivisor(nums: number[], threshold: number): number {
//   for(let i = 1; i <= Math.max(...nums); i++) {
//     const divSum = nums.reduce((acc, num) => acc + Math.ceil(num / i), 0);
//     if(divSum <= threshold) {
//       return i;
//     }
//   }
//   throw new Error('No divisor found');
// };

/*
 * as divisor grows, the sum of division of all numbers decreases
 * so we can use binary search to find the smallest divisor
 */
function smallestDivisor(nums: number[], threshold: number): number {
  let left = 1;
  let right = Math.max(...nums);
  while (left < right) {
    /* calcutate mid */
    const mid = Math.floor((left + right) / 2);
    const divSum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
    if (divSum > threshold) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
// @leet end

