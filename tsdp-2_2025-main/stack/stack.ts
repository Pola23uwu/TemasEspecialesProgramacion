import { Node } from "./node";
//Ligia Paola Silva Hernandez
class Stack {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  push(value: number) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  pop(): Node | null {
    if (this.head === null) {
      console.log("La pila está vacía");
      return null;
    }
    const removed = this.head;
    this.head = this.head.next;
    removed.next = null;
    console.log(`Eliminando el valor del nodo ${removed.value}`);
    return removed;
  }

  list(): void {
    let current = this.head;
    let values: number[] = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Pila: " + values.join(" -> "));
  }
}

const pila = new Stack();
pila.push(10);
pila.push(20);
pila.push(30);
pila.list();         
pila.pop();          
pila.list();         
