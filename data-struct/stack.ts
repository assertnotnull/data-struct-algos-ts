export class Stack {
  private stack: any[] = [];

  push(element: any) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
const second = stack.pop();
console.log(second);
