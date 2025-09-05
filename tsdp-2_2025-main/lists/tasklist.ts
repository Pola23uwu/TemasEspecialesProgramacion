import { TaskNode } from "./tasknode";

class TaskList {
  idCounter: number;
  head: TaskNode | null;
  tail: TaskNode | null;

  constructor() {
    this.idCounter = 1;
    this.head = null;
    this.tail = null;
  }

  addTask(title: string, completed = false) {
    // Crear nodo.
    const newNode = new TaskNode(this.idCounter, title, completed);
    // Actualizar contador.
    this.idCounter = this.idCounter + 1;

    if (this.head === null) {
      // la lista está vacía.
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = this.tail!.next;
    }
  }

  removeTask(id: number): boolean { return false; }

  listTasks(): void {
    if (this.head === null) {
      console.log('La lista está vacía');
      return;
    }

    let current: TaskNode | null = this.head;

    while (current !== null) {
      console.log(`${current.id} - ${current.title}: ${current.completed}`);
      current = current.next;
    }
  }

  updateTask(id: number): boolean {
    // buscar la lista
    try {
      if (this.head === null) {
        throw new Error('La lista está vacía');
      }

      let current: TaskNode | null = this.head;

      while (current !== null) {
        if (current.id === id) {
          // if (current.completed) {
          //   current.completed = false;
          // } else {
          //   current.completed = true;
          // }
          current.completed = current.completed ? false: true;
          // current.completed = current.completed!
          return current.completed;
        }
        current = current.next;
      }

      throw new Error("No se encontró el elemento");
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

// 1. Crear la lista
const list = new TaskList();

// 2. Agregar la primer tarea.
list.addTask('Primer tarea', false);
// 3. Listar  (se debe ver 1 sola tarea).
list.listTasks();  // '1 - Primer tarea - false'
// 4. Agregar 2 tareas.
console.log('-----');
list.addTask('Segunda tarea');
list.addTask('Lavar los trastes');
// 5. Listar (se deben ver 3 tareas).
list.listTasks();
// 6. Actualizar tarea
list.updateTask(2);
// 7. listar 
console.log('-----');
list.listTasks();