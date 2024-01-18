export class LinkedList {
  next: LinkedList | null;

  constructor(private value: string | number) {}

  getValue() {
    return this.value;
  }

  setNext(element: LinkedList) {
    this.next = element;
  }

  getNext() {
    return this.next;
  }
}

const head = new LinkedList(1);
const second = new LinkedList(2);
head.setNext(second);
