import { Node } from "./node";

class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: number) {}  
  dequeue(): Node {}
  
  list(): void {}
}
