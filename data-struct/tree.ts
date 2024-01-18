export class Heap {
  private values: number[] = [];

  insert(element: number) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (current <= parent) break;

      this.values[parentIndex] = current;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  getValues() {
    return this.values;
  }
}

const heap = new Heap();
[1, 23, 12, 9, 30, 2, 50].forEach((val) => heap.insert(val));
console.log(heap.getValues());
