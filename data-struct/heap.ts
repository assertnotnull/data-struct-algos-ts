export class Heap {
  private values: number[] = [];

  insert(element: number) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      console.log({ parentIndex, index, current, parent, values: this.values });

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
[-1, 2, 1, 4, -2].forEach((val) => heap.insert(val));
console.log(heap.getValues());
