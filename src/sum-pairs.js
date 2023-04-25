const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2]
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
  for (let i = 0; i < n; i++) {
   // console.log('soy i',ar[i])
    for (let j = i+1; j < n; j++) {
        //console.log('soy j', ar[j])
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;

}

console.log(divisibleSumPairs(n, k, ar))