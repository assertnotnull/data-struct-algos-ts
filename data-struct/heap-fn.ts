export function maxHeapify(arr: number[], k: number) {
  let largest = k;
  const n = arr.length;
  let l = 2 * k + 1; //left child index
  let r = 2 * k + 2; //right child index

  //If left child is smaller than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is smaller than smallest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If smallest is not root
  if (largest != k) {
    let temp = arr[k];
    arr[k] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    maxHeapify(arr, largest);
  }
}

maxHeapify([1, 23, 12, 9, 30, 2, 50], 3);
