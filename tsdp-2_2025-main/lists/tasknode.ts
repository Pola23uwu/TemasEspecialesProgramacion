export class TaskNode {
  id: number;
  title: string;
  completed: boolean;
  next: TaskNode | null;

  constructor(id: number, title: string, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.next = null;
  }
};
