export class ToDoListModel {
  public task?: string = '';
  public concluido?: boolean = false;
  constructor(task?: string) {
    this.task = task;
  }
}
