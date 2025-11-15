import { Node } from "./node";

class Stack {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {}

  pop(): Node {}

  list(): void {}
}
