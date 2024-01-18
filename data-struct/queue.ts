export class Queue {
  private queue: any[] = [];

  enqueue(element: any) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
