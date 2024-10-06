/**
 * find the mid index
 * if the length is even, find the mid two numbers, midIndex and midIndex - 1 (index starts from 0)
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const l1 = nums1.length;
  const l2 = nums2.length;
  const l = l1 + l2;

  let i1 = -1;
  let i2 = -1;
  let lastArray: 1 | 2 = 1;

  const isOdd = l % 2 === 1;
  const midIndex = l / 2;

  for (let j = 0; j < midIndex; j++) {
    switch (true) {
      case i1 === l1 - 1:
        i2++;
        lastArray = 2;
        break;
      case i2 === l2 - 1:
        i1++;
        lastArray = 1;
        break;
      case nums1[i1 + 1] < nums2[i2 + 1]:
        i1++;
        lastArray = 1;
        break;
      case nums1[i1 + 1] >= nums2[i2 + 1]:
        i2++;
        lastArray = 2;
        break;
      default:
        break;
    }
  }

  if (isOdd) {
    return lastArray === 1 ? nums1[i1] : nums2[i2];
  }

  const mid1 = lastArray === 1 ? nums1[i1] : nums2[i2];

  /* find the next mid number */
  let mid2: number;
  if (i1 === l1 - 1) {
    mid2 = nums2[i2 + 1];
  } else if (i2 === l2 - 1) {
    mid2 = nums1[i1 + 1];
  } else {
    mid2 = Math.min(nums1[i1 + 1], nums2[i2 + 1]);
  }

  console.log({ mid1, mid2 });

  return (mid1 + mid2) / 2;
}
