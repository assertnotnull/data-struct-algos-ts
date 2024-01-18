function findSum(values: number[], lookedFor: number) {
  values.sort((a, b) => a - b);
  const triplet = [0, 0, 0];
  for (let i = 0; i < values.length; i++) {
    triplet[0] = values[i];
    let left = i + 1;
    let right = values.length - 1;
    while (left < right) {
      triplet[1] = values[left];
      triplet[2] = values[right];
      const sum = triplet.reduce((a, b) => a + b);
      if (sum === lookedFor) {
        console.log(triplet);
        return true;
      }
      if (sum < lookedFor) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

console.log(findSum([3, 7, 1, 2, 8, 4, 5], 20));
