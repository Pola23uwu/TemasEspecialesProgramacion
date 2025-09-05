import { Node } from "./node";
//Ligia Paola Silva Hernandez
class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: number) {
    const newNode = new Node(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue(): Node | null {
    if (this.head === null) {
      console.log("La cola está vacía");
      return null;
    }
    const removed = this.head;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    removed.next = null;
    console.log(`Eliminando el valor ${removed.value} del nodo.`);
    return removed;
  }

  list(): void {
    let current = this.head;
    let values: number[] = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Cola: " + values.reverse().join(" <- "));
  }
}

const cola = new Queue();
cola.enqueue(10);
cola.enqueue(20);
cola.enqueue(30);
cola.list();          
cola.dequeue();      
cola.list();          
